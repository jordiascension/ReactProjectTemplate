Create tests for the `UserForm` React component using Jest and `react-test-renderer`.

Requirements:
- Use Jest as the test runner.
- Use `react-test-renderer` to render the component.
- Do not use React Testing Library.
- Do not use Enzyme.
- Import the component from its actual file path.
- Use `act` from `react-test-renderer` when triggering changes or form submission.
- Keep the tests simple and readable.

Test cases:
- It renders the form correctly.
- It renders the form title.
- It renders the First name, Last name, and Email fields.
- It renders the submit button.
- It shows validation errors when the form is submitted empty.
- It shows an email validation error when the email format is invalid.
- It does not show validation errors when all fields are valid.
- It calls `console.log` with the form data when the form is valid.

Testing details:
- Find Material UI `TextField` components by their `label` prop.
- Find the submit `Button` by its text or props.
- Simulate input changes by calling each field's `onChange` prop.
- Simulate form submission by calling the form container's `onSubmit` prop.
- Mock `console.log` in the valid submit test and restore it after the test.

Expected output:
- Create a test file named `UserForm.test.tsx` or `UserForm.test.jsx`, depending on the project setup.
- The tests should run with `npm test`.
- Do not modify the component unless it is necessary to make it testable.