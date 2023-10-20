import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

FormContact.propTypes = {};

function FormContact({ onSubmit }) {
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
      <InputField name="email" label="Email" form={form} width="320px" />
      <InputField name="yourName" label="Your Name" form={form} width="320px" />
      <InputField name="message" label="Message" form={form} width="320px" />
      <Button disabled={isSubmitting} type="submit" variant="contained">
        Gửi tin nhắn
      </Button>
    </form>
  );
}

export default FormContact;
