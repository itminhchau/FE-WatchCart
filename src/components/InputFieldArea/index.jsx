import { TextField } from '@mui/material';
import React from 'react';
import { Controller } from 'react-hook-form';

const InputFieldArea = ({ form, label, name, width }) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...field}
            multiline
            rows={5}
            // rowsMax={10}
            error={invalid}
            id="outlined-basic"
            // color="warning"
            label={label}
            variant="outlined"
            sx={{ margin: '12px 8px', border: '2px', width: `${width}` }}
            helperText={error?.message}
          />
        );
      }}
    />
  );
};

export default InputFieldArea;
