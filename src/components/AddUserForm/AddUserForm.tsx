import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import css from './AddUserForm.module.css';
import * as Yup from 'yup';
import { addUser } from '../../services/userServices';
import { useMutation, useQueryClient } from '@tanstack/react-query';
interface FormValues {
  name: string;
  email: string;
}
const initialValues: FormValues = {
  name: '',
  email: '',
};
const validateUserForm = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
});
export default function AddUserForm() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addUser,
    onSuccess() { queryClient.invalidateQueries({ queryKey: ['users'] })}
  })

  const handelSubmit = (
    value: FormValues,
    active: FormikHelpers<FormValues>,

  ) => {
    mutate({...value, isOnline: false});
    
    active.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handelSubmit}
      validationSchema={validateUserForm}
    >
      <Form>
        <label>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component={'span'} className={css.error} />
        </label>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" component={'span'} className={css.error} />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
