# react-redux-landing

## Setup

Install **Vite** and **Degit** first (if not installed):

```sh
npm install vite
npm install degit
```

Create a new project using official Redux+TS template for Vite:

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux react-redux-landing
cd react-redux-landing
npm install
npm run dev
```

Alternative:

```sh
npm create vite@latest -- --template react-ts
```

## Add Sass and Bootstrap

```sh
npm install -D sass
npm install bootstrap@latest
npm install bootstrap-icons

```

Create a custom scss with variable overrides and imports:
**src/styles/bootstrap-custom.scss**

```css
// Default variable overrides
$modal-backdrop-bg: black;
$modal-backdrop-opacity: 0.6;

$border-radius: 1px;
$dropdown-item-padding-y: 0.6rem;

// Bootstrap imports
@import "/node_modules/bootstrap-icons/font/bootstrap-icons.css";
@import "/node_modules/bootstrap/scss/bootstrap";
...
```

Import your custom scss:

```ts
import '/style/bootstrap-custom.scss'
```

## React-Router

```sh
npm install react-router-dom localforage match-sorter sort-by
```

## PropTypes

```sh
npm install --save prop-types
```

## Path Alias

```sh
npm install -D @types/node
```

Add aliases to **vite.config.ts**

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@app': path.resolve(__dirname, './src/app'),
    },
  },
  plugins: [react()],
})
```

Add aliases to **tsconfig.json**

```json
{
  "compilerOptions": {
    // ... your other compiler options
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@assets/*": ["src/assets/*"],
      "@components/*": ["src/components/*"],
      "@routes/*": ["src/routes/*"],
      "@app/*": ["src/app/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## React Lorem Ipsum

```sh
npm install react-lorem-ipsum
```

# i18n

```sh
npm install react-i18next i18next --save
npm install i18next-browser-languagedetector --save
npm install i18next-http-backend --save
```

## Custom properties

vite.config.ts

```ts
export default defineConfig({
  define: {
    APP_BUILD_TIME: JSON.stringify(
      new Date()
        .toISOString()
        .substring(0, 16)
        .replace('T', '.')
        .replace(/:/g, '')
        .replace(/-/g, '')
    ),
    __BUILD_TIME__: JSON.stringify(new Date()),
  },
  ...
```

vite-env.d.ts

```ts
/// <reference types="vite/client" />
declare const APP_BUILD_TIME: string
...
```

## Add transitions

```sh
npm install react-transition-group --save
npm install @types/react-transition-group
```

## Publish "build" to github.io

```sh
npm install gh-pages --save-dev
```

1. Edit package.json:

```json
"homepage": "https://{username}.github.io/repository_name"
...
"scripts":{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
  /* "deploy": "gh-pages -d build" */
  /* "deploy": "gh-pages -d build --nojekyll --version" */
}
```

2. Add remote that points to GitHub repo+:

```git
git remote add origin https://github.com/{username}/{repo-name}.git
```

3. Deploy:

```sh
npm run deploy
```

...

Add a remote that points to the GitHub repository

```sh
$ git remote add origin https://github.com/joseantanaper/react-redux-landing.git
```

### Manual mode

1. Install **gh-pages**:

```sh
npm install gh-pages --save-dev
```

2. Add **homepage** and **scripts** to package.json:

```json
"homepage": "https://<Username>.github.io/<Repository-name>"

"scripts":{
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
/* "deploy": "gh-pages -d build" */
}
```

- "deploy" needs that dist is updated with changes.

vite.config.ts:

IMPORTANT!

```json
"base": "/repository-name"
```

tsconfig.json:
"baseUrl": ".",
"include": ["src"]

vite.config.ts:

```json
build: {
  outDir: 'build',
  sourcemap: true,
},
```

---

---

---

---

---

---

---

---

---

---

# vite-template-redux

Uses [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/), and [React Testing Library](https://github.com/testing-library/react-testing-library) to create a modern [React](https://react.dev/) app compatible with [Create React App](https://create-react-app.dev/)

```sh
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

## Goals

- Easy migration from Create React App or Vite
- As beginner friendly as Create React App
- Optimized performance compared to Create React App
- Customizable without ejecting

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Inspiration

- [Create React App](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
