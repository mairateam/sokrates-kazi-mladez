# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint (flat config, ESLint 9)
- `npm run preview` — preview production build

## Architecture

React 19 + Vite 7 single-page app. Czech language (`lang="cs"`).

- `src/main.jsx` — entry point, renders `<App />` with StrictMode
- `src/App.jsx` — main application component
- `vite.config.js` — Vite config with `@vitejs/plugin-react`

## Environment Variables

Copy `.env.example` to `.env` before running. Variables must be prefixed with `VITE_` to be exposed to client code.
