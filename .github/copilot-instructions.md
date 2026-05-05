# GitHub Copilot Instructions

## Project overview

This is a React project based on Create React App.

Use JavaScript, React 16, react-router-dom 5, Jest, ESLint and Prettier.

## General rules

- Follow the existing project structure.
- Keep changes small, clear and focused.
- Prefer functional React components.
- Use readable names for components, functions and variables.
- Avoid unnecessary abstractions.
- Do not introduce TypeScript unless explicitly requested.
- Do not migrate the project to Vite unless explicitly requested.

## Project structure

The main application code lives in `src/`.

Current relevant files:

- `src/App.js`
- `src/index.js`
- `src/App.css`
- `src/index.css`
- `src/sumar.js`
- `src/sumar.test.js`

## React conventions

- Use functional components.
- Keep component logic simple.
- Extract reusable UI into separate components when it improves readability.
- Keep routing compatible with react-router-dom v5.
- Use `Switch`, `Route` and `BrowserRouter` when working with routes.
- Avoid hooks or APIs that require newer React versions unless compatible with React 16.14.

## Testing conventions

- Use Jest for unit tests.
- Keep test files close to the code being tested.
- Use `.test.js` naming.
- Test behavior and outputs, not implementation details.

## Styling conventions

- Use the existing CSS files unless a new component-specific CSS file is clearly useful.
- Keep class names descriptive.
- Avoid inline styles unless the value is dynamic or very small.

## Commit message conventions

Use Conventional Commits.

Format:

```text
type(scope): short imperative summary

- Main change.
- Important implementation detail.
- UI, behavior or architecture impact.
- Tests or documentation updates if applicable.
```

Allowed types:

- `feat`: new functionality
- `fix`: bug fix
- `refactor`: code restructuring without changing behavior
- `perf`: performance improvement
- `docs`: documentation-only change
- `test`: tests added or updated
- `chore`: maintenance, dependencies or tooling
- `style`: formatting-only changes
- `build`: build system changes
- `ci`: CI/CD changes

Examples:

```text
feat(app): add initial route structure

- Added BrowserRouter configuration for the application shell.
- Created base routes using react-router-dom v5.
- Updated App component to render route-based content.
```

```text
fix(utils): correct sum helper behavior

- Updated sumar function to return the expected numeric result.
- Added Jest coverage for positive and negative inputs.
```
