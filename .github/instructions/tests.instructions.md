---
applyTo: "src/**/*.test.js"
---

# Test Instructions

When editing or creating tests:

- Use Jest.
- Follow the existing `.test.js` naming convention.
- Keep test files close to the code being tested.
- Keep test names clear and behavior-focused.
- Test expected outputs and user-visible behavior.
- Avoid testing private implementation details.
- Keep tests small and focused.
- Do not introduce new testing libraries unless explicitly requested.

## Test example

```js
import sumar from './sumar';

test('returns the sum of two numbers', () => {
  expect(sumar(2, 3)).toBe(5);
});
```
