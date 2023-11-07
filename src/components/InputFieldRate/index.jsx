import StarIcon from '@mui/icons-material/Star';
import { FormHelperText, Rating } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputFieldRate = ({ name, form, label, width }) => {
  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field, fieldState: { invalid, error } }) => {
        return (
          <>
            <input name="rating" type="number" value={field.value} hidden readOnly />
            <Rating
              name="rating"
              // precision={1}
              // defaultValue={2}
              onChange={field.onChange}
              size="large"
              label={label}
              emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
            />
            <FormHelperText error={invalid}>{error?.message}</FormHelperText>
          </>
        );
      }}
    />
  );
};

export default InputFieldRate;
