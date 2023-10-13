import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldPassword from 'components/InputFieldPassword';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
LoginForm.propTypes = {};

function LoginForm({ onSubmit }) {
  const schema = yup
    .object({
      email: yup.string().required('Vui lòng nhập email').email('làm ơn nhập đúng định dạng email'),
      password: yup.string().required('vui lòng nhập mật khẩu').min(6, 'lớn hơn sáu số'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };
  const { isSubmitting } = form.formState;
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col justify-center items-center gap-2">
      <InputField name="email" label="email" form={form} width="100%" />
      <InputFieldPassword name="password" label="password" form={form} />
      <Button disabled={isSubmitting} type="submit" variant="contained">
        Đăng nhập
      </Button>
    </form>
  );
}

export default LoginForm;
