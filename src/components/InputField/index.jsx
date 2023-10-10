import React from 'react';
import PropTypes from 'prop-types';
import { Controller } from 'react-hook-form';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

InputField.propTypes = {};
const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#eba81d',
    fontSize: '20px',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#eba81d',
    },
    '&:hover fieldset': {
      borderColor: '#eba81d',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#eba81d',
    },
  },
});

function InputField({ form, label, name, width }) {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <CssTextField
            {...field}
            error={invalid}
            id="outlined-basic"
            inputProps={{
              style: {
                color: 'black', // Thay đổi màu sắc của text
              },
            }}
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
