---
applyTo: "src/**/*.js"
---

# React Component Instructions

When editing React files:

- Use functional components.
- Keep JSX readable.
- Avoid deeply nested JSX.
- Extract repeated UI into small components.
- Use props with clear names.
- Keep state as local as possible.
- Do not add external UI libraries unless explicitly requested.
- Keep compatibility with React 16.14.
- Keep routing compatible with react-router-dom v5.
- Use `Switch`, `Route`, `Redirect` and `BrowserRouter` instead of React Router v6 APIs.
- Do not introduce TypeScript unless explicitly requested.

## Component example

```jsx
function UserCard({ name, email }) {
  return (
    <article className="user-card">
      <h2>{name}</h2>
      <p>{email}</p>
    </article>
  );
}

export default UserCard;
```
