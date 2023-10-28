import React from 'react';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from 'components/InputField';
import InputFieldPassword from 'components/InputFieldPassword';
import { Button } from '@mui/material';

const RegisterForm = ({ onSubmit }) => {
  const schema = yup
    .object({
      firstName: yup.string().required('Vui lòng nhập Họ'),
      lastName: yup.string().required('Vui lòng nhập Tên'),
      userName: yup.string().required('Vui lòng nhập userName'),
      password: yup.string().required('Vui lòng nhập mật khẩu').min(6, 'Lớn hơn 6 số'),
      shipAddress: yup.string().required('Vui lòng nhập địa chỉ'),
      phoneNumber: yup.number().required('Vui lòng nhập số điện thoại'),
      gender: yup.string().required('Vui lòng nhập giới tính'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      userName: '',
      password: '',
      shipAddress: '',
      phoneNumber: '',
      gender: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };
  const { isSubmitting } = form.formState;

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="flex flex-col justify-start items-center gap-2 overflow-y-scroll "
    >
      <InputField name="firstName" label="Họ" form={form} width="100%" />
      <InputField name="lastName" label="Tên" form={form} width="100%" />
      <InputField name="userName" label="Tên Đăng nhập" form={form} width="100%" />
      <InputFieldPassword name="password" label="Mật khẩu" form={form} width="380px" />
      <InputField name="shipAddress" label="Địa chỉ" form={form} width="100%" />
      <InputField name="phoneNumber" label="Số điện thoại" form={form} width="100%" />
      <InputField name="gender" label="Giới tính" form={form} width="100%" />
      <Button disabled={isSubmitting} type="submit" variant="contained">
        Đăng ký
      </Button>
    </form>
  );
};

export default RegisterForm;
