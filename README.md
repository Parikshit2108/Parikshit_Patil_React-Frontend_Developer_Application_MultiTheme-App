# 🌈 Multi-Theme Switcher App with Auth (React + Vite + Tailwind + TypeScript)

A responsive React app built using **Vite**, **TypeScript**, and **Tailwind CSS**, featuring:

- 🔐 Login/Logout using sessionStorage
- 👥 Role-based access (Admin vs Limited user)
- 🎨 Theme switcher with 3 distinct themes (Light, Dark, Colorful)
- 🧭 Protected routes with private access control
- 📱 Fully responsive UI for mobile, tablet, and desktop

---

## 🚀 Features

### ✅ Theming
- **Light Theme**: Minimalist layout with sans-serif font
- **Dark Theme**: Bold serif font, sidebar-friendly layout
- **Colorful Theme**: Card-based playful layout using Google Fonts (`Pacifico`)
- Theme persists across reloads (via `localStorage`)

### ✅ Authentication
- **Login/Logout system** with `sessionStorage` (no backend)
- Hardcoded users with roles:
  - `admin / admin123` → Full access
  - `user / user123` → Limited access
- Auth state and role stored securely in session

### ✅ Routing & Access Control
- Routes are protected using a custom `PrivateRoute` wrapper
- Admin-only route: `/products`
- Authenticated routes: `/`, `/about`, `/contact`
- Unauthorized users are redirected to `/login`

### ✅ Responsive UI
- Mobile-first layout with a hamburger menu
- Tailwind used for clean, modern design
- Theme affects fonts, spacing, backgrounds, buttons

multi-theme-auth-app/
├── public/
├── src/
│   ├── api/              # Axios instance and API methods
│   ├── components/       # Header, PrivateRoute
│   ├── context/          # ThemeContext
│   ├── pages/            # Home, Login, About, Contact, Products
│   ├── utils/            # Auth logic (login, logout, roles)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env
├── .gitignore
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md

## 🚀 Live Demo

🔗 [https://your-vercel-app.vercel.app](https://your-vercel-app.vercel.app)

### 🧪 Test Credentials
- **Admin:** `admin` / `admin123`
- **User:** `user` / `user123`

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

