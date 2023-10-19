import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldPassword from 'components/InputFieldPassword';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { useState } from 'react';
LoginForm.propTypes = {};

function LoginForm({ onSubmit }) {
  const [loading, setLoading] = useState(false);
  const schema = yup
    .object({
      email: yup.string().required('Vui lòng nhập email').email('Làm ơn nhập đúng định dạng email'),
      password: yup.string().required('vui lòng nhập mật khẩu').min(6, 'Lớn hơn 6 số'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleLoading = () => {
    setLoading(!loading);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
    handleLoading();
  };
  const { isSubmitting } = form.formState;
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center items-center gap-2">
      <InputField name="email" label="Email" form={form} width="100%" />
      <InputFieldPassword name="password" label="Mật khẩu" form={form} />
      <Button disabled={isSubmitting} type="submit" variant="contained">
        Đăng nhập
      </Button>
      {loading && loading === true && (
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      )}
    </form>
  );
}

export default LoginForm;
