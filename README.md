# ☕ Coffee Shop - A React App

A simple **Vite + React + TypeScript** project connected to a backend API.  
This project demonstrates:
- Client ↔ API integration (GET + POST)
- Search, loading, and error states
- Simple product form with validation
- Clean UI with tabs & cards
- GitHub-ready setup with `.gitignore` and `.env.example`

---

## 🚀 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/YoadK/coffee-shop-react.git
cd coffee-shop-react
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure environment variables
Each side has its own `.env.local` (ignored by git) and `.env.example` (committed placeholder).

#### Server (backend)
```bash
cd server
cp .env.example .env.local
```
Edit `.env.local` with your real values:
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/coffee-shop
JWT_SECRET=your_jwt_secret_here
```

#### Client (frontend)
```bash
cd client
cp .env.example .env.local
```
Edit `.env.local`:
```bash
VITE_API_URL=http://localhost:4000/api
```

### 4. Run locally
Open **two terminals** (one for the backend, one for the frontend).

**Server (backend)**
```bash
cd server
npm run dev
```
Runs on [http://localhost:4000](http://localhost:4000)

**Client (frontend)**
```bash
cd client
npm run dev
```
Runs on [http://localhost:5173](http://localhost:5173)

### 5. Build for production

**Server (backend)**
```bash
cd server
npm run build
```

**Client (frontend)**
```bash
cd client
npm run build
npm run preview
```
- The server build will output compiled backend code (e.g., in `dist/` if configured).
- The client build will output static assets in `dist/`, which can be served by the backend or any static host.
---

## 🛠 Tech Stack
- **React 19** + **TypeScript**
- **Vite 5**
- **React Router DOM**
- CSS (custom)

---

## 📂 Project Structure
```
project-root/
 ├─ client/          # React app (frontend)
 ├─ server/          # Node/Express backend
 ├─ scripts/         # Helper scripts (GitHub issues, etc.)
 ├─ .gitignore
 └─ README.md
```

```
src/
 ├─ api.ts         # API client (fetch products, create product)
 ├─ App.tsx        # Main app with routes & pages
 ├─ App.css        # Styles for layout, tabs, cards
 ├─ main.tsx       # Entry point (ReactDOM + Router)
 └─ index.css      # Global styles
```

---

## 📄 .gitignore (included in repo)
```gitignore
# Dependencies
node_modules/

# Production build
dist/

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Local env files
.env
.env.*
!.env.example

# Editor / IDE junk
.vscode/
.idea/
*.sw?
.DS_Store
Thumbs.db

# Coverage / testing
coverage/
```

---

## 📄 .env.example (included in repo)
```bash
# Example environment variables for Vite project
# Copy this file to .env.local (which is ignored by git)

# API endpoint for your backend
VITE_API_URL=http://localhost:4000/api
```

---

## 🤝 Contributing
1. Fork the project  
2. Create a branch (`git checkout -b feat/amazing-feature`)  
3. Commit changes (`git commit -m 'feat: add amazing feature'`)  
4. Push to branch (`git push origin feat/amazing-feature`)  
5. Open a Pull Request  

---

## 📜 License
MIT – feel free to use and adapt for your own learning.
