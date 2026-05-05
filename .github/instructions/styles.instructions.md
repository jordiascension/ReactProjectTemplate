---
applyTo: "src/**/*.css"
---

# Styling Instructions

When editing CSS files:

- Preserve the current plain CSS approach.
- Use descriptive class names.
- Prefer simple selectors.
- Avoid global rules that may accidentally affect unrelated components.
- Keep layout styles readable.
- Do not introduce CSS-in-JS unless explicitly requested.
- Do not add Tailwind, Sass or styled-components unless explicitly requested.
- Keep styles consistent with the existing `App.css` and `index.css` approach.

## CSS style example

```css
.user-card {
  padding: 1rem;
  border-radius: 0.5rem;
}

.user-card__title {
  margin: 0;
}
```
