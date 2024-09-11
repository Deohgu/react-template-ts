# Diogo dos Santos Tipalti Take-Home Assignment

## Project Overview

This project implements an Expense Table component using React.

## Tech Stack

- React
- TypeScript
- React Query
- Axios
- Material-UI
- Vite

## Setup

1. Clone the repository:
   ```
   git clone git@github.com:Deohgu/react-template-ts.git
   cd react-template-ts
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

## Features

- Modular Expense Table component
- Data fetching with React Query
- Loading and error state handling
- Responsive design with Material-UI

## Project Structure

```
src/
├── app/
│   ├── routes/       # Application routes
│   └── router.tsx    # Application routing configuration
├── config/           # Global configurations, environment variables
├── features/
│   └── expense-table/  # New Expense Table feature
│       ├── api/
│       │   └── get-expenses.ts
│       ├── components/
│       │   ├── expense-table.tsx
│       │   ├── table-header.tsx
│       │   ├── loading-row.tsx
│       │   ├── error-row.tsx
│       │   └── row.tsx
│       └── utils/
├── lib/              # Reusable libraries (e.g., api-client)
├── App.scss          # Main application styles
├── App.tsx           # Main application component
├── index.scss        # Global styles
└── main.tsx          # Application entry point
```

