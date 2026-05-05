import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const initialErrors = {
  firstName: '',
  lastName: '',
  email: '',
};

function validateEmail(email) {
  // Simple email regex
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const UserForm = () => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    let valid = true;
    const newErrors = { ...initialErrors };
    if (!values.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      valid = false;
    }
    if (!values.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      valid = false;
    }
    if (!values.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(values.email)) {
      newErrors.email = 'Enter a valid email';
      valid = false;
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Log form data if valid
      console.log('Form Data:', values);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Stack spacing={3}>
        <Typography variant="h5" component="h1" align="center">
          User Form
        </Typography>
        <TextField
          label="First Name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
          fullWidth
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
          fullWidth
        />
        <TextField
          label="Email"
          name="email"
          value={values.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </Box>
  );
};

export default UserForm;
