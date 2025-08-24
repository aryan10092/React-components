import React from 'react';
import { InputField, InputFieldProps } from '../components/InputField/InputField';
import { Meta, StoryObj } from '@storybook/react';

const meta: Meta<InputFieldProps> = {
  title: 'Components/InputField',
  component: InputField,
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<InputFieldProps>;

export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email.',
    variant: 'filled',
    size: 'md',
  },
};

export const Error: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Invalid email address',
    variant: 'outlined',
    size: 'md',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    placeholder: 'Cannot type',
    disabled: true,
    variant: 'ghost',
    size: 'sm',
  },
};

export const PasswordToggle: Story = {
  args: {
    label: 'Password',
    placeholder: 'Enter password',
    type: 'password',
    showPasswordToggle: true,
    variant: 'filled',
    size: 'lg',
  },
};

export const ClearButton: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search',
    showClear: true,
    variant: 'outlined',
    size: 'md',
  },
};
