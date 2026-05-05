# Architecture

## Purpose

This repository is a React project template intended to provide a clean starting point for small and medium-sized frontend applications.

The goal of this document is to define the architectural conventions that should be followed when evolving the project. It is also intended to help contributors and AI coding assistants generate code that is consistent with the repository structure.

## Current Stack

The project is currently based on:

- React 16
- React DOM
- React Router DOM 5
- Create React App / `react-scripts`
- JavaScript with JSX
- Jest for testing
- Babel Jest for test transformation
- ESLint for static analysis
- Prettier for code formatting

## Project Structure

Current high-level structure:

```text
ReactProjectTemplate/
  public/
  src/
    App.css
    App.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    sumar.js
    sumar.test.js
  .eslintrc.js
  .prettierrc
  babel.config.js
  jest.config.js
  package.json
  package-lock.json
  README.md
```

As the project grows, the recommended structure is:

```text
src/
  app/
    App.js
    routes.js
    providers.js

  assets/
    images/
    icons/

  components/
    common/
    layout/

  features/
    exampleFeature/
      components/
      hooks/
      pages/
      services/
      tests/

  hooks/

  pages/

  services/
    apiClient.js

  styles/
    global.css

  utils/

  index.js
```

## Architectural Principles

### 1. Keep `src/index.js` minimal

`src/index.js` should only be responsible for bootstrapping the React application and rendering the root component.

It should not contain business logic, routing rules, API calls, or application state logic.

### 2. Keep `App.js` focused on application composition

`App.js` should act as the main application shell.

It may compose:

- Global providers
- Application routes
- Shared layout
- Global error boundaries

It should not contain feature-specific business logic.

### 3. Prefer feature-based organization as the project grows

When the application starts to include real functionality, code should be grouped by feature instead of only by technical type.

Recommended example:

```text
src/features/users/
  components/
  hooks/
  pages/
  services/
  tests/
```

This keeps related code close together and makes the project easier to scale.

### 4. Separate UI, state, and side effects

Components should focus on rendering UI.

Business logic, data fetching, browser APIs, and reusable state should be extracted into:

- Custom hooks
- Services
- Utility functions
- Feature-specific modules

Avoid placing API calls directly inside presentational components unless the component is intentionally small and temporary.

### 5. Prefer small, reusable components

Components should be easy to read, test, and replace.

A component should usually have one primary responsibility. If a component becomes difficult to understand, split it into smaller components or extract logic into a hook.

## Routing

The project includes `react-router-dom` version 5.

Routing should be centralized in a dedicated file when the application has more than one page.

Recommended file:

```text
src/app/routes.js
```

Example responsibility:

```js
// src/app/routes.js
// Define application routes in one place.
```

Page-level components should be placed under:

```text
src/pages/
```

or inside feature folders:

```text
src/features/<featureName>/pages/
```

## Components

Recommended component rules:

- Use functional components.
- Use PascalCase for component names.
- Keep component files close to their related styles and tests when useful.
- Avoid large components with multiple responsibilities.
- Do not duplicate components that can be generalized safely.

Example:

```text
src/components/common/Button/
  Button.js
  Button.css
  Button.test.js
```

For very small components, a single file is acceptable.

## Services and API Access

External communication should be centralized in services.

Recommended location:

```text
src/services/
```

or feature-specific services:

```text
src/features/<featureName>/services/
```

Rules:

- Do not scatter API calls across many components.
- Keep endpoint details outside UI components.
- Return plain data from services when possible.
- Handle API errors in a consistent way.

Example:

```text
src/services/apiClient.js
src/features/users/services/userService.js
```

## State Management

The current template does not include a dedicated global state library.

Default recommendation:

- Use local component state for local UI concerns.
- Use React Context only for truly global application concerns.
- Avoid introducing a global state library until there is a clear need.

Examples of valid global state:

- Authenticated user session
- Theme or UI preferences
- Application-wide configuration

Examples that should usually remain local:

- Form field values
- Modal open/closed state
- Temporary filters used by a single page

## Styling

The current project uses CSS files.

Recommended rules:

- Keep global styles minimal.
- Use component-specific CSS for component styles.
- Avoid placing unrelated styles in `App.css`.
- Move shared/global styles to a dedicated styles folder as the project grows.

Recommended structure:

```text
src/styles/global.css
src/components/common/Button/Button.css
```

## Utilities

Utility functions should be placed in:

```text
src/utils/
```

Rules:

- Utilities should be pure when possible.
- Utilities should not depend on React unless they are hooks.
- Shared utilities should have unit tests.

The existing `sumar.js` file is an example of a simple utility that can be tested independently.

## Testing

The project uses Jest with the `jsdom` environment.

Testing conventions:

- Unit tests should be written for utilities and business logic.
- Component tests should focus on behavior rather than implementation details.
- Test files may live next to the code they test or in `__tests__` folders.
- Use the `.test.js` or `.spec.js` naming convention.

Examples:

```text
src/utils/sum.test.js
src/features/users/services/userService.test.js
src/components/common/Button/Button.test.js
```

## Linting and Formatting

The project includes ESLint and Prettier scripts.

Expected commands:

```bash
npm run lint
npm run format:check
npm run format
```

Rules:

- Run linting before opening a pull request.
- Run formatting before committing large changes.
- Do not manually format code in a way that conflicts with Prettier.

## Naming Conventions

Recommended naming rules:

| Element | Convention | Example |
|---|---|---|
| Components | PascalCase | `UserCard.js` |
| Hooks | camelCase with `use` prefix | `useUsers.js` |
| Services | camelCase or feature name + Service | `userService.js` |
| Utilities | camelCase | `formatDate.js` |
| Test files | Same name + `.test.js` | `sumar.test.js` |
| CSS files | Same as component when scoped | `Button.css` |

## Dependency Rules

Before adding a new dependency:

1. Check whether the project already has a dependency that solves the same problem.
2. Prefer small, well-maintained libraries.
3. Avoid adding libraries that duplicate existing responsibilities.
4. Document important dependency decisions in a dedicated `libraries.md` or `dependencies.md` file.

## Recommended Future Improvements

The following improvements can be introduced gradually:

- Move `App.js` to `src/app/App.js` when the application grows.
- Add `src/app/routes.js` when multiple routes exist.
- Add `src/components/` for reusable UI components.
- Add `src/features/` for feature-based modules.
- Add `src/services/` for API and external integrations.
- Add `src/utils/` for reusable pure functions.
- Consider React Testing Library for component behavior tests.
- Consider upgrading React and React Router in a controlled migration.
- Consider TypeScript if the project grows in complexity.

## AI Assistant / Copilot Guidelines

When generating code for this repository:

- Follow this architecture document.
- Prefer functional React components.
- Do not introduce new dependencies without justification.
- Keep `index.js` focused on bootstrapping.
- Keep `App.js` focused on application composition.
- Place reusable UI in `src/components/`.
- Place feature-specific code in `src/features/<featureName>/`.
- Place API access in `src/services/` or feature-level `services/` folders.
- Add or update tests when adding logic.
- Use the existing linting and formatting rules.

## Summary

This repository should remain simple at the beginning, but it should evolve toward a modular React architecture as features are added.

The main architectural goal is to keep responsibilities separated:

- Bootstrapping in `index.js`
- Application composition in `App.js`
- Pages and routes separated from reusable components
- Business logic outside presentational components
- API access centralized in services
- Tests close to the code they validate
