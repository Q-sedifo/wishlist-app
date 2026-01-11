# Demo WishList (React + TypeScript + Vite)

This project is a test task.

The application is a CRUD WishList built with React and TypeScript, following a REST architecture and using a fake REST API.

---

## Features

- Dashboard with a grid of wishes
- Add, update and delete wishes (CRUD)
- Wish details page
- Sorting:
  - by creation date (newest / oldest)
  - by price (high → low / low → high)
- Client-side pagination using "Load more"
- Confirmation modals for delete actions
- Success / error notifications for API requests
- Responsive UI

---

## Tech Stack

- React (latest)
- TypeScript
- Vite
- React Router
- Context API
- Tailwind CSS
- Fake REST API (`json-server`)
- Custom hooks only

---

## Project Setup

Firstly, you need to install dependencies, please run the following commands

```bash
npm install

npm run server
```

The API will be available at: http://localhost:3001

```bash
npm run dev
```

Open the app in the browser: http://localhost:5173

Project structure:
```
src/
├── components/
│    ├── forms/
│    ├── modals/
│    ├── providers/
│    ├── ui/
│    └── WishCard.tsx
├── context/
├── hooks/
├── pages/
├── types/
├── api/
├── assets/
