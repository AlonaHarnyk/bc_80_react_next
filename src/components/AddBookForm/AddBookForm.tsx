import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AddbookForm.module.css';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBook } from '../../services/bookServices';

interface FormValues {
  author: string;
  title: string;
  year: number;
  description: string;
}

const initialValues: FormValues = {
  author: '',
  title: '',
  year: new Date().getFullYear(),
  description: '',
};

const bookFormSchema = Yup.object().shape({
  author: Yup.string().min(2).required(),
  title: Yup.string().min(2).required(),
  year: Yup.number().positive().integer().required(),
  description: Yup.string().max(200),
});
export default function AddBookForm() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBook,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      });
    },
  });
  const handlesubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    mutate(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handlesubmit}
      validationSchema={bookFormSchema}
    >
      <Form className={css.form}>
        <label>
          Author
          <Field type="text" name="author" className={css.formField} />
          <ErrorMessage
            name="author"
            component="span"
            className={css.formErrorMessage}
          />
        </label>
        <label>
          Title
          <Field type="text" name="title" className={css.formField} />
          <ErrorMessage
            name="title"
            component="span"
            className={css.formErrorMessage}
          />
        </label>
        <label>
          Year
          <Field type="number" name="year" className={css.formField} />
          <ErrorMessage
            name="year"
            component="span"
            className={css.formErrorMessage}
          />
        </label>
        <label>
          Description
          <Field as="textarea" name="description" className={css.formField} />
          <ErrorMessage
            name="description"
            component="span"
            className={css.formErrorMessage}
          />
        </label>

        <button type="submit">Add book</button>
      </Form>
    </Formik>
  );
}

// Реалізувати запит на додавання книги (має викликатись при сабміті форми AddBookForm)
