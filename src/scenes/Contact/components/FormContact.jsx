import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldArea from 'components/InputFieldArea';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

FormContact.propTypes = {};

function FormContact({ onSubmit }) {
  const schema = yup
    .object({
      email: yup.string().required('Vui lòng nhập email').email('làm ơn nhập đúng định dạng email'),
      userName: yup.string().required('vui lòng nhập tên'),
      message: yup.string().required('vui lòng nhập tin nhắn'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      email: '',
      userName: '',
      message: '',
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
      <InputField name="userName" label="Họ và tên" form={form} width="320px" />
      <InputFieldArea name="message" label="Tin nhắn" form={form} width="320px" />
      <Button disabled={isSubmitting} type="submit" variant="contained">
        Gửi tin nhắn
      </Button>
    </form>
  );
}

export default FormContact;
