import { Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import css from './ContactForm.module.css'

const initialValues = {
    name: "",
    number: ""
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });

export const  ContactForm  = ({ onAdd }) => {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: Date.now(),
            ...values
        });
        actions.resetForm();
    }
    return (
        <div className={css.container}>
        <Formik initialValues={initialValues} validationSchema={ContactsSchema} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.field}>
                    <p className={css.text}>Name</p>
                    <Field type="text" name="name" placeholder="Name" />
                    <ErrorMessage component="div" className={css.error} name="name" as="span" />
                </div>

                 <div className={css.field}>
                    <p className={css.text}>Number</p>
                    <Field type='text' name='number' placeholder="000-00-00"/>
                    <ErrorMessage component="div" className={css.error} name="number" as="span" />
                </div>
        <button type="submit">Add Contact</button>
        </Form>
    </Formik>
</div>
)
}  