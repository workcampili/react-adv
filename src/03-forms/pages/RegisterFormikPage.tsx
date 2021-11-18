
import * as Yup from 'yup';
import { Form, Formik } from 'formik'
import '../styles/styles.css'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'Debe tener al menos 2 caracteres')
                        .max(15, 'debe tener menos de 15 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Debe ser un email valido')
                        .required('Requerido'),
                    password1: Yup.string()
                        .min(6, 'Debe tener al menos 6 caracteres')
                        .required('Requerido'),
                    password2: Yup.string()
                        .min(6, 'Debe tener al menos 6 caracteres')
                        .oneOf([Yup.ref('password1'), null], 'Passwords must match')
                        .required('Requerido'),
                })}
            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>

                            <MyTextInput
                                name="name"
                                type="text"
                                label="Name"
                                placeholder="john Doe"
                            />

                            <MyTextInput
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="john@gmail.com"
                            />

                            <MyTextInput
                                name="password1"
                                type="password"
                                label="Password"
                                placeholder="********"
                            />

                            <MyTextInput
                                name="password2"
                                type="password"
                                label="Confirm Password"
                                placeholder="repeat your password"
                            />
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>

                        </Form>

                    )
                }




            </Formik>

            {/* <button type="submit">Register</button>
            <button type="button" onClick={resetForm}>Reset</button> */}


        </div>
    )
}

export default RegisterFormikPage
