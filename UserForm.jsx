import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export const UserForm = ({ onSubmit }) => {
  const userNameField = useId();
  const roleField = useId();
  const emailField = useId();
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  const userSchema = Yup.object().shape({
    username: Yup.string().min(3, 'Too short').max(20, 'Too long').required('This is required!'),
    email: Yup.string().email('Must be in email format').required('This is required!'),
    role: Yup.string().oneOf(['guest', 'user', 'admin']).required('Choose your role!'),
  });
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        role: 'user',
      }}
      validationSchema={userSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor={userNameField}>Username</label>
          <Field name="username" id={userNameField} />
          <ErrorMessage name='username'/>
        </div>
        <div>
          <label htmlFor="emailField">Email:</label>
          <Field name="email" id={emailField} />
          <ErrorMessage name='email'/>
        </div>
        <div>
          <label htmlFor={roleField}>Role</label>
          <Field as="select" name="role" id={roleField}>
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </Field>
          <ErrorMessage name='role'/>
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};



export const App = () => {
  const [text, setText] = useState('qwerty');
  const [lang, setLang] = useState('en');
  const [user, setUser] = useState(null);

  const saveUser = (user) => {
    setUser(user);
  }
  return (
   <div>
    {user && <div>
      <p>{user.username}</p>
      <p>{user.role}</p>
    </div> }
    <UserForm onSubmit = {saveUser}/>
    <TextImput value={text} onChange = {setText}/>
    <p>{text}</p>
    <LangSwitcher lang={lang} onChange ={setLang}/>
    <p>Current lang: {lang}</p>
   </div>
  )
}