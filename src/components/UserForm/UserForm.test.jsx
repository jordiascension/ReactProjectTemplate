import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import UserForm from './UserForm';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// Helper to find a component by type and prop value
function findByTypeAndProp(testInstance, type, prop, value) {
  return testInstance.findAll(
    (node) => node.type === type && node.props[prop] === value
  );
}

describe('UserForm', () => {
  it('renders the form correctly', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    expect(testRenderer.toJSON()).toBeTruthy();
  });

  it('renders the form title', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const title = testRenderer.root.findByProps({
      children: 'User Form',
    });
    expect(title).toBeTruthy();
  });

  it('renders the First name, Last name, and Email fields', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const firstName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name');
    const lastName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name');
    const email = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email');
    expect(firstName.length).toBe(1);
    expect(lastName.length).toBe(1);
    expect(email.length).toBe(1);
  });

  it('renders the submit button', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const buttons = testRenderer.root.findAllByType(Button);
    const submitButton = buttons.find(
      (btn) => btn.props.type === 'submit' && btn.props.children === 'Submit'
    );
    expect(submitButton).toBeTruthy();
  });

  it('shows validation errors when the form is submitted empty', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const form = testRenderer.root.find((node) => node.props.onSubmit);
    act(() => {
      form.props.onSubmit({ preventDefault: () => {} });
    });
    const firstName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name')[0];
    const lastName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name')[0];
    const email = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    expect(firstName.props.error).toBe(true);
    expect(lastName.props.error).toBe(true);
    expect(email.props.error).toBe(true);
    expect(firstName.props.helperText).toBe('First name is required');
    expect(lastName.props.helperText).toBe('Last name is required');
    expect(email.props.helperText).toBe('Email is required');
  });

  it('shows an email validation error when the email format is invalid', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const form = testRenderer.root.find((node) => node.props.onSubmit);
    const firstName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name')[0];
    const lastName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name')[0];
    const email = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    // Fill valid first and last name, invalid email
    act(() => {
      firstName.props.onChange({ target: { name: 'firstName', value: 'John' } });
      lastName.props.onChange({ target: { name: 'lastName', value: 'Doe' } });
      email.props.onChange({ target: { name: 'email', value: 'invalid-email' } });
    });
    act(() => {
      form.props.onSubmit({ preventDefault: () => {} });
    });
    const emailField = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    expect(emailField.props.error).toBe(true);
    expect(emailField.props.helperText).toBe('Enter a valid email');
  });

  it('does not show validation errors when all fields are valid', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const form = testRenderer.root.find((node) => node.props.onSubmit);
    const firstName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name')[0];
    const lastName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name')[0];
    const email = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    act(() => {
      firstName.props.onChange({ target: { name: 'firstName', value: 'Jane' } });
      lastName.props.onChange({ target: { name: 'lastName', value: 'Smith' } });
      email.props.onChange({ target: { name: 'email', value: 'jane@smith.com' } });
    });
    act(() => {
      form.props.onSubmit({ preventDefault: () => {} });
    });
    const firstNameField = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name')[0];
    const lastNameField = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name')[0];
    const emailField = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    expect(firstNameField.props.error).toBe(false);
    expect(lastNameField.props.error).toBe(false);
    expect(emailField.props.error).toBe(false);
    expect(firstNameField.props.helperText).toBe('');
    expect(lastNameField.props.helperText).toBe('');
    expect(emailField.props.helperText).toBe('');
  });

  it('calls console.log with the form data when the form is valid', () => {
    const testRenderer = TestRenderer.create(<UserForm />);
    const form = testRenderer.root.find((node) => node.props.onSubmit);
    const firstName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'First Name')[0];
    const lastName = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Last Name')[0];
    const email = findByTypeAndProp(testRenderer.root, TextField, 'label', 'Email')[0];
    const mockLog = jest.spyOn(console, 'log').mockImplementation(() => {});
    act(() => {
      firstName.props.onChange({ target: { name: 'firstName', value: 'Alice' } });
      lastName.props.onChange({ target: { name: 'lastName', value: 'Wonderland' } });
      email.props.onChange({ target: { name: 'email', value: 'alice@wonder.land' } });
    });
    act(() => {
      form.props.onSubmit({ preventDefault: () => {} });
    });
    expect(mockLog).toHaveBeenCalledWith('Form Data:', {
      firstName: 'Alice',
      lastName: 'Wonderland',
      email: 'alice@wonder.land',
    });
    mockLog.mockRestore();
  });
});
