# A&R Automóveis

Site com vitrine de veículos, detalhes, WhatsApp com atendentes, admin, Supabase e deploy na Vercel.

## Configuração

1. No Supabase, mantenha as tabelas `vehicles` e `vehicle_images`.
2. Crie um bucket público chamado `vehicle-photos` para veículos e `testimonials-photo` para depoimentos, ou ajuste as variáveis de bucket.
3. Execute o arquivo `supabase-schema-policies.sql` no SQL Editor do Supabase.
4. Crie o usuário administrador em Authentication.
5. Copie `.env.example` para `.env` no ambiente local e preencha:

```env
VITE_SUPABASE_URL=
VITE_SUPABASE_ANON_KEY=
VITE_SUPABASE_STORAGE_BUCKET=vehicle-photos
VITE_SUPABASE_TESTIMONIALS_BUCKET=testimonials-photo
```

## Rodar local

```bash
npm install
npm run dev
```

## Deploy Vercel

Na Vercel, configure:

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`
- Environment variables:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`
  - `VITE_SUPABASE_STORAGE_BUCKET`
  - `VITE_SUPABASE_TESTIMONIALS_BUCKET`

## Admin

Acesse pelo cadeado discreto no rodapé ou direto em:

```text
#admin
```

O login usa e-mail e senha criados no Supabase Auth.
