# Prisma Setup (Ready for Future DB Integration)

This project includes a Prisma-first content schema aligned with the NGONDA specification:

- Bilingual content (`de`, `fr`)
- Separation of current vs archive projects
- Structured legal blocks, team members, social links, gallery, brochures and funders

## 1) Install dependencies

```bash
npm install prisma @prisma/client
```

## 2) Configure database

Create `.env` with:

```env
DATABASE_URL="postgresql://USER:PASSWORD@HOST:5432/DB_NAME?schema=public"
```

## 3) Generate and migrate

```bash
npx prisma generate
npx prisma migrate dev --name init_ngonda
```

## 4) Seed initial content

```bash
node prisma/seed.mjs
```

## Notes

- `prisma/seed.mjs` is intentionally minimal and can be extended with all page content.
- The frontend currently runs with local typed content in `src/data/site-content.ts` and can be progressively switched to Prisma queries.
