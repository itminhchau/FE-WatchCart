import { yupResolver } from '@hookform/resolvers/yup';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import InputField from 'components/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

AnswerForm.propTypes = {};

function AnswerForm({ onSubmit }) {
  const schema = yup
    .object({
      content: yup.string().required('Vui lòng nhập tin nhắn'),
    })
    .required();
  const form = useForm({
    defaultValues: {
      content: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <div className="flex justify-between items-center">
        <InputField name="content" label="Câu trả lời" form={form} width="100%" />
        <Button type="submit" variant="contained" endIcon={<SendIcon />}>
          Send
        </Button>
      </div>
    </form>
  );
}

export default AnswerForm;
