# CLAUDE.md

## Project Overview

This is a **Vue.js 2 teaching/learning repository** that demonstrates core Vue concepts: routing, state management (Vuex), form validation (Vuelidate), HTTP requests (Axios), component communication, and E2E testing (Cypress).

## Tech Stack

- **Framework**: Vue.js 2.6 with Vue CLI 4.4 (webpack-based)
- **Language**: JavaScript (ES6+)
- **Routing**: Vue Router 3 (history mode)
- **State Management**: Vuex 3 (namespaced modules)
- **HTTP Client**: Axios 0.19 with interceptors
- **Form Validation**: Vuelidate 0.7
- **UI**: Bootstrap 4 + BootstrapVue 2
- **Styling**: SCSS (scoped per component)
- **E2E Testing**: Cypress 4.9
- **Package Manager**: npm

## Commands

| Command | Description |
|---|---|
| `npm install` | Install dependencies |
| `npm run serve` | Dev server with hot-reload |
| `npm run build` | Production build to `dist/` |
| `npm test` | Open Cypress interactive GUI |
| `npm run test-video` | Run Cypress tests headless with recording |
| `npm run start-prod` | Build + serve production via Express on port 80 |

## Project Structure

```
src/
├── main.js                  # Entry point - Vue init, plugin registration
├── App.vue                  # Root component (contains <router-view>)
├── api-data.js              # Mock data for store items
├── busData.js               # Event bus (Vue instance for sibling communication)
├── axios/
│   └── index.js             # Axios instance with interceptors, mounted as $axios
├── assets/                  # Images and static files
├── components/              # Reusable components
│   ├── general/             # Navbar, Body, Footer, Modal, CustomComponent
│   ├── dashboard/           # Item component (shopping cart item card)
│   ├── StoreExample/        # Vuex demo child components
│   └── vuelidate/           # Form validation components
├── pages/                   # Route-level page components
│   ├── dashboard/           # Shopping cart demo
│   ├── Bar/                 # Nested child routes demo
│   ├── Foo/                 # Simple page
│   ├── Cypress/             # Todo list (Cypress test target)
│   ├── StoreExample/        # Vuex store demo
│   ├── Vuelidate/           # Form validation demo
│   ├── SlotPage.vue         # Vue slots demo
│   └── 404.vue              # Not-found page
├── router/
│   └── index.js             # Route definitions with lazy loading
└── store/
    ├── index.js             # Root Vuex store
    └── modules/
        ├── users.js         # Namespaced users module
        └── cities.js        # Namespaced cities module
```

Other key directories:
- `cypress/` - E2E test specs and fixtures
- `serve-prod/` - Express server for production SPA serving
- `public/` - Static assets (index.html, favicon)

## Architecture & Patterns

### Component Communication
- **Parent to child**: Props (with type and default validation)
- **Child to parent**: `$emit` events
- **Sibling/global**: Event bus via `busData.js` (`busData.$emit` / `busData.$on`)
- **Global state**: Vuex store with namespaced modules

### Vuex Store
- Namespaced modules (`users`, `cities`) accessed via `$store.getters["module/getter"]`
- Actions use Promises for async operations
- Getters can accept parameters for dynamic lookups
- Use `mapGetters` helper in components

### Routing
- History mode (clean URLs)
- Lazy loading with webpack chunk names: `() => import(/* webpackChunkName: "name" */ './Page.vue')`
- Nested child routes (see Bar page)
- Scroll behavior restoration on navigation
- Wildcard fallback to 404 page

### Axios Configuration
- Custom instance with environment-based `baseURL` (`VUE_APP_RUTA_API`)
- Request interceptor adds auth token from localStorage
- Response interceptor for logging
- Mounted on Vue prototype as `this.$axios`

## Coding Conventions

### File Naming
- **Components/Pages**: PascalCase (e.g., `Navbar.vue`, `SlotPage.vue`)
- **Utilities/Config**: camelCase or kebab-case (e.g., `busData.js`, `api-data.js`)
- **Test specs**: kebab-case with `.spec.js` suffix

### Vue Components
- Single File Components (`.vue`) with `<template>`, `<script>`, `<style>` sections
- Scoped SCSS styles: `<style lang="scss" scoped>`
- Clean up event bus listeners in `beforeDestroy` lifecycle hook

### CSS
- BEM-like naming: `Modal__Container`, `Modal__Header`
- Nested SCSS with `&` parent selector
- Bootstrap grid for responsive layouts

## Testing

Cypress E2E tests live in `cypress/integration/`:
- `example-cypress.specs.js` - Basic Cypress demo
- `add-new-todo.spec.js` - Todo list interaction tests with screenshots

Tests use element selectors (IDs and classes) to find and interact with components.

## Environment Variables

- `VUE_APP_RUTA_API` - API base URL for Axios (defaults to `http://localhost:3000`)
