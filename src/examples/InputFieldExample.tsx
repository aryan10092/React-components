import React, { useState } from 'react';
import { InputField } from '../components/InputField/InputField';

export default function InputFieldExample() {
  const [value, setValue] = useState('');
  return (
    <div className="max-w-md mx-auto mt-10 space-y-6">
      <InputField
        label="Username"
        placeholder="Enter your username"
        value={value}
        onChange={e => setValue(e.target.value)}
        helperText="This will be your public username."
        variant="outlined"
        size="md"
        showClear
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        type="password"
        showPasswordToggle
        variant="filled"
        size="lg"
        invalid={value.length < 6}
        errorMessage={value.length < 6 ? 'Password must be at least 6 characters.' : undefined}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <InputField
        label="Disabled"
        placeholder="Can't type here"
        disabled
        variant="ghost"
        size="sm"
      />
    </div>
  );
}
