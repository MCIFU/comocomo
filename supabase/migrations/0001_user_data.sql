-- COMOCOMO · 0001 · datos de usuario (V1)
--
-- Decisión: el catálogo (recetas, ingredientes, precios de referencia) vive de momento
-- versionado en packages/content y se referencia por id de texto (slug). Así el corpus se
-- valida en CI y evita una tabla de catálogo hasta que haya edición/licencias que lo justifiquen.
-- Aquí solo viven los datos del usuario, todos protegidos por RLS: cada fila pertenece a auth.uid().

create table public.profiles (
  id             uuid primary key references auth.users (id) on delete cascade,
  display_name   text,
  country        text check (country is null or char_length(country) = 2),  -- ISO 3166-1 alpha-2
  region         text,
  city           text,
  locale         text not null default 'es',
  currency       text not null default 'EUR' check (char_length(currency) = 3),
  unit_system    text not null default 'metric' check (unit_system in ('metric', 'imperial')),
  household_size smallint not null default 2 check (household_size between 1 and 20),
  budget_default numeric(8, 2) check (budget_default is null or budget_default >= 0),
  time_default   smallint check (time_default is null or time_default > 0),
  created_at     timestamptz not null default now(),
  updated_at     timestamptz not null default now()
);

create table public.user_restrictions (
  id       bigint generated always as identity primary key,
  user_id  uuid not null references public.profiles (id) on delete cascade,
  kind     text not null check (kind in ('allergy', 'intolerance', 'diet', 'dislike')),
  value    text not null check (char_length(value) between 1 and 64),  -- id de ingrediente, alérgeno o tag
  unique (user_id, kind, value)
);

create table public.user_equipment (
  user_id   uuid not null references public.profiles (id) on delete cascade,
  equipment text not null check (char_length(equipment) between 1 and 32),
  primary key (user_id, equipment)
);

create table public.favorites (
  user_id    uuid not null references public.profiles (id) on delete cascade,
  recipe_id  text not null check (char_length(recipe_id) between 1 and 96),
  created_at timestamptz not null default now(),
  primary key (user_id, recipe_id)
);

create table public.shopping_lists (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references public.profiles (id) on delete cascade,
  name       text not null default 'Mi lista',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- qty en unidad base (g, ml, unidades) para poder fusionar sin pérdidas.
create table public.shopping_items (
  id            uuid primary key default gen_random_uuid(),
  list_id       uuid not null references public.shopping_lists (id) on delete cascade,
  user_id       uuid not null references public.profiles (id) on delete cascade,
  ingredient_id text not null,
  qty_base      numeric(12, 2) not null check (qty_base > 0),
  checked       boolean not null default false,
  recipe_ids    text[] not null default '{}',
  updated_at    timestamptz not null default now(),
  unique (list_id, ingredient_id)
);
create index shopping_items_list_idx on public.shopping_items (list_id);

create table public.cook_history (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references public.profiles (id) on delete cascade,
  recipe_id  text not null,
  servings   smallint not null check (servings between 1 and 50),
  cooked_at  timestamptz not null default now()
);
create index cook_history_user_idx on public.cook_history (user_id, cooked_at desc);

-- updated_at automático
create function public.touch_updated_at() returns trigger
language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create trigger profiles_touch      before update on public.profiles       for each row execute function public.touch_updated_at();
create trigger lists_touch         before update on public.shopping_lists for each row execute function public.touch_updated_at();
create trigger shopping_items_touch before update on public.shopping_items for each row execute function public.touch_updated_at();

-- Perfil vacío al registrarse
create function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id) values (new.id);
  insert into public.shopping_lists (user_id) values (new.id);
  return new;
end $$;

create trigger on_auth_user_created after insert on auth.users
  for each row execute function public.handle_new_user();

-- ── Row Level Security ─────────────────────────────────────────────────────
-- Un usuario solo ve y modifica sus propias filas. Sin políticas = sin acceso.
alter table public.profiles          enable row level security;
alter table public.user_restrictions enable row level security;
alter table public.user_equipment    enable row level security;
alter table public.favorites         enable row level security;
alter table public.shopping_lists    enable row level security;
alter table public.shopping_items    enable row level security;
alter table public.cook_history      enable row level security;

create policy "own profile"  on public.profiles for all
  using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy "own restrictions" on public.user_restrictions for all
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "own equipment" on public.user_equipment for all
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "own favorites" on public.favorites for all
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

create policy "own lists" on public.shopping_lists for all
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Un ítem solo puede colgar de una lista del propio usuario.
create policy "own items" on public.shopping_items for all
  using (user_id = (select auth.uid()))
  with check (
    user_id = (select auth.uid())
    and exists (select 1 from public.shopping_lists l where l.id = list_id and l.user_id = (select auth.uid()))
  );

create policy "own history" on public.cook_history for all
  using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));

-- Realtime solo para la lista de la compra (sincronía multi-dispositivo)
alter publication supabase_realtime add table public.shopping_items;
