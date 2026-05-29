import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './AddContactForm.module.css';

interface FormValues {
  name: string;
  email: string;
  tel: string;
  city: string;
  hasJob: 'yes' | 'no';
  sex: 'female' | 'male';
  hobbies: HobbiesValues[];
  description: string;
}

type HobbiesValues =
  | 'box'
  | 'dance'
  | 'swimming'
  | 'football'
  | 'skydiving'
  | 'cooking'
  | 'cycling';

const initialValues: FormValues = {
  name: '',
  email: '',
  tel: '',
  city: '',
  hasJob: 'no',
  sex: 'male',
  hobbies: [],
  description: '',
};

const contactFormSchema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  email: Yup.string().email().required(),
  tel: Yup.string().min(2).required(),
  city: Yup.string().min(2).required(),
  hasJob: Yup.string().oneOf(['no', 'yes']),
  sex: Yup.string().oneOf(['male', 'female']),
  hobbies: Yup.array().of(
    Yup.string().oneOf([
      'box',
      'dance',
      'swimming',
      'football',
      'skydiving',
      'cooking',
      'cycling',
    ]),
  ),
  description: Yup.string().max(200),
});

export default function AddContactForm() {
  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>,
  ) => {
    console.log('Data', values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactFormSchema}
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
        <label>
          Phone
          <Field type="text" name="tel" />
          <ErrorMessage name="tel" component={'span'} className={css.error} />
        </label>
        <label>
          City
          <Field type="text" name="city" />
          <ErrorMessage name="city" component={'span'} className={css.error} />
        </label>
        <fieldset>
          <legend>Has contact job?</legend>
          <label>
            <Field type="radio" name="hasJob" value="yes" />
            Yes
          </label>
          <label>
            <Field type="radio" name="hasJob" value="no" />
            No
          </label>
        </fieldset>
        <Field as="select" name="sex">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </Field>
        <fieldset>
          <legend>Hobbies</legend>
          <label>
            Box
            <Field type="checkbox" name="hobbies" value="box" />
          </label>
          <label>
            Dance
            <Field type="checkbox" name="hobbies" value="dance" />
          </label>
          <label>
            Swimming
            <Field type="checkbox" name="hobbies" value="swimming" />
          </label>
          <label>
            Football
            <Field type="checkbox" name="hobbies" value="football" />
          </label>
          <label>
            Skydiving
            <Field type="checkbox" name="hobbies" value="skydiving" />
          </label>
          <label>
            Cycling
            <Field type="checkbox" name="hobbies" value="cycling" />
          </label>
          <label>
            Cooking
            <Field type="checkbox" name="hobbies" value="cooking" />
          </label>
        </fieldset>
        <label>
          Description
          <Field as="textarea" name="description" />
        </label>
        <button type="submit">Save</button>
      </Form>
    </Formik>
  );
}
