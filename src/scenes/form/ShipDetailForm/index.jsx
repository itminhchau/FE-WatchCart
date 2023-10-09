import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Paper } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

ShipDetailForm.propTypes = {};

function ShipDetailForm({ onSubmit }) {
  const schema = yup
    .object({
      // arrayImageDetail: yup.array(),
      firstName: yup.string().required('please enter values'),
      lastName: yup.string().required('please enter values'),
      email: yup.string().required('please enter values'),
      phoneNumber: yup.number().positive('please enter number positive').required('please enter values'),
      address: yup.string().required('please enter values'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <div>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <Container maxWidth="lg">
          <Paper sx={{ display: 'flex', flexDirection: 'column' }}>
            <InputField name="firstName" form={form} label="Họ" width="200px" />
            <InputFieldDropdown name="province" form={form} label="Tỉnh" width="200px" />
            <Button type="submit" variant="contained" sx={{ width: '200px' }}>
              thanh toán
            </Button>
          </Paper>
        </Container>
      </form>
    </div>
  );
}

export default ShipDetailForm;
