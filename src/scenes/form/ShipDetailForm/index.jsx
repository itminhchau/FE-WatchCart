import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Container, Paper } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldDropdown from 'components/InputFieldDropdown';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

ShipDetailForm.propTypes = {};
const list = [
  {
    id: 1,
    name: 'Quảng Trị',
    value: 'Quảng Trị',
  },
  {
    id: 2,
    name: 'Đà Nẵng',
    value: 'Đà Nẵng',
  },
];
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

function ShipDetailForm({ onSubmit }) {
  const schema = yup
    .object({
      // arrayImageDetail: yup.array(),
      firstName: yup.string().required('Vui lòng nhập họ'),
      lastName: yup.string().required('Vui lòng nhập tên'),
      email: yup.string().required('Vui lòng nhập email'),
      phoneNumber: yup.string().matches(phoneRegExp, {
        message: 'Số điện thoại không hợp lệ',
        excludeEmptyString: false,
      }),
      address: yup.string().required('Vui lòng nhập địa chỉ'),
      province: yup.string().required('Vui lòng chọn Tỉnh/Thành phố'),
      district: yup.string().required('Vui lòng chọn Quận/Huyện'),
      ward: yup.string().required('Vui lòng chọn Phường/Xã'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      province: '',
      district: '',
      ward: '',
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
            <InputField name="firstName" form={form} label="Họ" width="300px" />
            <InputField name="lastName" form={form} label="Tên" width="300px" />
            <InputField name="email" form={form} label="Email" width="300px" />
            <InputField name="phoneNumber" form={form} label="Số điện thoại" width="300px" />
            <InputField name="address" form={form} label="Địa chỉ" width="300px" />
            <InputFieldDropdown name="province" form={form} list={list} label="Tỉnh/Thành phố" width="300px" />
            <InputFieldDropdown name="district" form={form} list={list} label="Quận/Huyện" width="300px" />
            <InputFieldDropdown name="ward" form={form} list={list} label="Phường/Xã" width="300px" />
            <Button
              type="submit"
              variant="contained"
              sx={{ width: '200px', marginTop: '20px', marginBottom: '20px', marginLeft: '8px' }}
            >
              thanh toán
            </Button>
          </Paper>
        </Container>
      </form>
    </div>
  );
}

export default ShipDetailForm;
