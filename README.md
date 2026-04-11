# Pacific Settlement Bank (PSB) Portal

## Стэк технологий
- **Frontend**: [Next.js 15](https://nextjs.org/) (App Router) + TypeScript
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **Backend / CMS**: [PocketBase](https://pocketbase.io/) (SQLite + Admin UI)
- **Security**: Quantum Shield Visual Protection Layer

## Архитектура
- **Hybrid Data Layer**: Сочетание статического контента из `src/data/content.json` и динамических реестров из PocketBase.
- **RootLayout**: Глобальные институциональные компоненты (Navbar, Footer, SecurityProvider).

## Быстрый запуск
1. `npm install` — установка зависимостей.
2. `npm run dev` — запуск фронтенда на `http://localhost:3000`.
3. `.\pb\pocketbase.exe serve` — запуск базы данных на `http://127.0.0.1:8090`.

## Документация
Подробная техническая документация и руководства по управлению контентом находятся в каталоге [`/doc`](./doc):
- [Overview](./doc/overview.md) — Обзор проекта.
- [Features](./doc/features.md) — Функциональные возможности.
- [Structure](./doc/structure.md) — Карта директорий.
- [Deployment](./doc/deployment.md) — Руководство по запуску.
- [Admin Guide](./doc/admin.md) — Гайд по панели управления.
- [Audit Log](./doc/AUDIT.md) — Хронология разработки.

---
*PSB Bank Institutional Network, 2026.*
