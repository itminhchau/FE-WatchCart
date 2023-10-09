import { MenuItem, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

InputFieldDropdown.propTypes = {};

function InputFieldDropdown({ form, name, label, list, width }) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <TextField
            {...field}
            id="outlined-select-currency"
            select
            label={label}
            defaultValue="1"
            sx={{ width: `${width}`, marginTop: '4px', marginLeft: '8px' }}
            error={invalid}
            helperText={error?.message}
          >
            {list &&
              list.map((option) => (
                <MenuItem key={option.id} value={option.value}>
                  {option.name}
                </MenuItem>
              ))}
          </TextField>
        );
      }}
    />
  );
}

export default InputFieldDropdown;
