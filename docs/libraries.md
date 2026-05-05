# Libraries

This document defines the approved libraries for this React project and the rules for using them.

## Goal

The goal of this document is to keep the project consistent, avoid duplicated dependencies, and help developers and AI tools generate code that follows the same technical decisions.

All new dependencies should be reviewed before being added to the project.

## Approved libraries

| Area | Library | Purpose |
|---|---|---|
| UI Components | Material UI | Main component library for forms, layout, buttons, dialogs, tables, and common UI elements |
| Styling Engine | Emotion | Default styling engine used by Material UI |
| Routing | React Router | Client-side routing |
| Testing | Jest / React Testing Library | Unit and component testing |
| Code Quality | ESLint | Static code analysis |
| Formatting | Prettier | Code formatting |

## Material UI

Material UI is the official UI component library for this project.

Material UI must be used for common user interface elements such as:

- Forms
- Buttons
- Inputs
- Dialogs
- Menus
- Cards
- Tables
- Layout components
- Feedback messages

Do not introduce another UI component library unless there is a strong technical reason and the decision is documented in this file.

## Material UI installation

Install Material UI and its default styling dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

If icons are needed, install Material UI Icons:

```bash
npm install @mui/icons-material
```

## Material UI usage rules

- Use components from `@mui/material`.
- Do not use plain HTML form controls when a Material UI equivalent exists.
- Use `TextField` for standard text inputs.
- Use `Button` for actions.
- Use `Box`, `Container`, `Stack`, or `Grid` for layout.
- Use `Typography` for text and headings.
- Use `Card`, `Paper`, or `Dialog` when appropriate.
- Use `Alert`, `Snackbar`, or `Dialog` for user feedback.
- Use the `sx` prop for simple component-level styling.
- Use theme customization for shared styles.
- Avoid scattered custom CSS when Material UI props or theme configuration can solve the problem.
- Do not mix Material UI with another design system unless explicitly approved.

## Forms

Forms must be built with Material UI components.

Recommended components:

| Use case | Material UI component |
|---|---|
| Text input | `TextField` |
| Select input | `Select` or `TextField` with `select` |
| Checkbox | `Checkbox` |
| Radio buttons | `RadioGroup` and `Radio` |
| Submit button | `Button` |
| Layout | `Box`, `Stack`, `Grid`, `Container` |
| Labels | `FormControl`, `InputLabel`, `FormLabel` |
| Helper or error messages | `helperText`, `error`, `FormHelperText` |

### Form rules

- Do not use plain `<input>`, `<select>`, or `<textarea>` elements when a Material UI component is available.
- Use `TextField` for simple text, email, password, number, and multiline inputs.
- Use the `error` and `helperText` props to display validation messages.
- Keep form state and validation logic readable.
- Keep API calls outside form UI components when possible.
- Extract reusable form logic into custom hooks when the form becomes complex.

## Example form component

```tsx
import { useState } from "react";
import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type UserFormState = {
  firstName: string;
  lastName: string;
  email: string;
};

export default function UserForm() {
  const [formData, setFormData] = useState<UserFormState>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [errors, setErrors] = useState<Partial<UserFormState>>({});

  const handleChange =
    (field: keyof UserFormState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [field]: event.target.value,
      });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: Partial<UserFormState> = {};

    if (!formData.firstName) {
      nextErrors.firstName = "First name is required";
    }

    if (!formData.lastName) {
      nextErrors.lastName = "Last name is required";
    }

    if (!formData.email) {
      nextErrors.email = "Email is required";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    console.log(formData);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Stack spacing={2}>
        <Typography variant="h5">User form</Typography>

        <TextField
          label="First name"
          value={formData.firstName}
          onChange={handleChange("firstName")}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName}
          fullWidth
        />

        <TextField
          label="Last name"
          value={formData.lastName}
          onChange={handleChange("lastName")}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName}
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange("email")}
          error={Boolean(errors.email)}
          helperText={errors.email}
          fullWidth
        />

        <Button type="submit" variant="contained">
          Save
        </Button>
      </Stack>
    </Box>
  );
}
```

## Layout rules

Use Material UI layout components instead of creating unnecessary custom wrappers.

Recommended usage:

| Layout need | Component |
|---|---|
| Page container | `Container` |
| Generic wrapper | `Box` |
| Vertical or horizontal spacing | `Stack` |
| Two-dimensional layout | `Grid` |
| Visual section | `Paper` or `Card` |

### Layout guidelines

- Use `Stack` for simple vertical or horizontal spacing.
- Use `Grid` when both rows and columns are needed.
- Use `Container` for page-level width constraints.
- Use `Box` for simple wrappers and semantic elements.
- Avoid deeply nested layout components unless necessary.

## Styling

Preferred styling order:

1. Material UI component props.
2. The `sx` prop for simple component-level styles.
3. Theme customization for shared design decisions.
4. CSS files only when necessary.

Avoid inline `style={{ ... }}` unless there is a specific reason.

### Example using `sx`

```tsx
<Box
  sx={{
    display: "flex",
    flexDirection: "column",
    gap: 2,
  }}
>
  Content
</Box>
```

## Theme configuration

If the project needs shared colors, typography, spacing, or component overrides, configure them through the Material UI theme.

Recommended location:

```text
src/theme/
  theme.ts
```

Example:

```tsx
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
  },
});
```

The application should wrap the root component with `ThemeProvider` when a custom theme is used.

## Libraries to avoid

| Library | Reason |
|---|---|
| jQuery | Not needed in React applications |
| Bootstrap React libraries | Avoid mixing UI systems with Material UI |
| Multiple UI component libraries | Keep the design system consistent |
| Multiple form UI libraries | Keep forms consistent with Material UI |
| Moment.js | Prefer modern alternatives if date handling is required |
| Full Lodash import | Prefer native JavaScript or specific imports when needed |

## Adding new libraries

Before adding a new library, document the decision in this file.

Use this template:

```md
## Library proposal

- Library name:
- Problem it solves:
- Why existing libraries are not enough:
- Alternatives considered:
- Bundle size impact:
- TypeScript support:
- Maintenance/community:
- Decision:
```

## Copilot rules

When generating code with GitHub Copilot:

- Follow the approved libraries defined in this document.
- Use Material UI for UI components.
- Import UI components from `@mui/material`.
- Do not generate plain HTML inputs when Material UI components are available.
- Do not introduce another UI library.
- Use `TextField` validation props such as `error` and `helperText`.
- Use `Box`, `Stack`, `Grid`, or `Container` for layout.
- Keep forms accessible and reusable.
- Keep API calls outside UI components.
- Do not add new dependencies without documenting the reason.
