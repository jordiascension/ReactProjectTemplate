---
applyTo: "**/*"
---

# Commit Message Instructions

When generating commit messages:

- Use Conventional Commits.
- Write commit messages in English.
- Use a short imperative summary.
- Include a scope when it is clear.
- Use bullet points for the commit body when the change is relevant.
- Mention concrete files, functions or components only when useful.
- Do not invent changes that are not present in the diff.

## Format

```text
type(scope): short imperative summary

- Main implementation change.
- Important technical detail.
- UI, behavior, test or documentation impact.
```

## Recommended scopes

- `app`
- `components`
- `routes`
- `styles`
- `utils`
- `tests`
- `config`
- `docs`

## Examples

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

```text
refactor(styles): simplify app layout classes

- Renamed layout classes to make their purpose clearer.
- Removed duplicated CSS declarations from App.css.
- Preserved the existing visual behavior.
```
