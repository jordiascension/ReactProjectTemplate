Create a simple React form component using Material UI.

Requirements:
- Create a component named `UserForm` in a folder called UserForm.
- Use functional components.
- Use React `useState` to manage form data.
- Use Material UI components from `@mui/material`.
- Use `Box` as the form container.
- Use `Stack` for spacing.
- Use `Typography` for the form title.
- Use `TextField` for inputs.
- Use `Button` for the submit action.
- Do not use plain HTML inputs.
- Do not add API calls inside the component.

Fields:
- First name
- Last name
- Email

Validation:
- First name is required.
- Last name is required.
- Email is required.
- Email must have a valid email format.
- Show validation errors using the `error` and `helperText` props of `TextField`.

Submit behavior:
- Prevent the default form submit behavior.
- If the form is valid, log the form data to the console.

Dependency check:
- Before creating the component, check whether Material UI is installed in `package.json`.
- If Material UI is missing, add these dependencies:
  - `@mui/material`
  - `@emotion/react`
  - `@emotion/styled`

Export the component as default.