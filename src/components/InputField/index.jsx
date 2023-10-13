import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Controller } from 'react-hook-form';

InputField.propTypes = {};

function InputField({ form, label, name, width }) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...field}
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
}

export default InputField;
