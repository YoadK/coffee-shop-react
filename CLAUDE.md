# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a full-stack coffee shop application built with:
- **Frontend**: React 19 + TypeScript + Vite (client/)
- **Backend**: Node.js + Express + MongoDB (server/)

The application demonstrates a simple product catalog with search functionality and the ability to add new products.

## Development Commands

### Client (React + Vite)
```bash
cd client
npm install          # Install dependencies
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (TypeScript compilation + Vite build)
npm run lint         # Run ESLint
npm run preview      # Preview production build
```

### Server (Node.js + Express)
```bash
cd server
npm install          # Install dependencies
node server.js       # Start server (http://localhost:4000)
```

Note: Server requires MongoDB connection via `MONGO_URL` environment variable.

## Architecture

### Frontend Structure (client/src/)
- `App.tsx` - Main application with routing, HomePage and ProductsPage components
- `api.ts` - API client functions (`listProducts`, `createProduct`)
- `main.tsx` - Entry point with React Router setup
- `App.css` - Component styles (tabs, cards, layout)
- `index.css` - Global styles

### Backend Structure (server/)
- `server.js` - Express server with MongoDB integration
- Product schema with name, price, category fields
- REST API endpoints:
  - `GET /api/products` - List products with search and pagination
  - `POST /api/products` - Create new product

### Key Features
- Client-server communication via fetch API
- Search functionality with query parameters
- Tab-based UI (Browse/Add products)
- Form validation and error handling
- Optimistic UI updates when adding products

## Environment Configuration

### Client
Create `.env.local` in client/ directory:
```
VITE_API_URL=http://localhost:4000/api
```

### Server
Copy `.env.example` to `.env.local` in server/ directory and update values:
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```
MONGO_URL=mongodb://127.0.0.1:27017/coffee_shop_db
PORT=4000
JWT_SECRET=your_jwt_secret_here
```

## Development Workflow

1. Start MongoDB service
2. Start server: `cd server && node server.js`
3. Start client: `cd client && npm run dev`
4. Both services should be running for full functionality

The frontend expects the backend API at the URL specified in `VITE_API_URL`. The server uses CORS to allow requests from `http://localhost:5173`.