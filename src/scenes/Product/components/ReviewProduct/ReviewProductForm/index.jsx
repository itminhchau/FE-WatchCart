import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Grid } from '@mui/material';
import InputField from 'components/InputField';
import InputFieldArea from 'components/InputFieldArea';

ReviewProductForm.propTypes = {};

function ReviewProductForm({ onSubmit }) {
  const schema = yup
    .object({
      message: yup.string().required('Vui lòng nhập tin nhắn'),
      userName: yup.string().required('vui lòng nhập họ và tên'),
      phoneNumber: yup.number().required('Vui lòng nhập số điện thoại'),
      email: yup.string().required('Vui lòng nhập email').email('làm ơn nhập đúng định dạng email'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      message: '',
      userName: '',
      phoneNumber: '',
      email: '',
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
      <Grid container spacing={1}>
        <Grid xs={12} item>
          <InputFieldArea name="message" label="hãy chia sẽ cảm nhận của bạn về sản phẩm" form={form} width="100%" />
        </Grid>
        <Grid xs={6} item>
          <InputField name="userName" label="Nhập họ và tên" form={form} width="100%" />
        </Grid>
        <Grid xs={6} item>
          <InputField name="phoneNumber" label="Nhập số điện thoại" form={form} width="100%" />
        </Grid>
        {/* <Grid xs={12} item>
          <InputField name="email" label="Nhập email" form={form} width="100%" />
        </Grid> */}
        <Grid xs={12} item>
          <Button disabled={isSubmitting} className="float-right" type="submit" variant="contained">
            Hoàn tất
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default ReviewProductForm;
