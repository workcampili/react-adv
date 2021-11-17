import React from 'react'
import { Field, Form, ErrorMessage, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'



export const FormikComponents = () => {

    return (
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: '',
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, 'debe tener menos de 15 caracteres')
                        .required('Requerido'),
                    lastName: Yup.string()
                        .max(10, 'debe tener menos de 10 caracteres')
                        .required('Requerido'),
                    email: Yup.string()
                        .email('Debe ser un email valido')
                        .required('Requerido'),
                    terms: Yup.boolean()
                        .oneOf([true], 'Debe aceptar los terminos y condiciones'),
                    jobType: Yup.string()
                        .notOneOf(['internship'], 'no es una opcion permitida')
                        .required('Requerido'),


                })
                }
            >
                {
                    (formik) => (
                        <Form noValidate>

                            <label htmlFor="firstName">FirstName</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component="span" />

                            <label htmlFor="lastName">LastName</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component="span" />


                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name='email' component="span" />

                            <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                <option value="">Select a Job type</option>
                                <option value="fullTime">Full Time</option>
                                <option value="partTime">Part Time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span" />

                            <label>
                                <Field name='terms' type='checkbox' />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component="span" />

                            <button type="submit">Submit</button>

                        </Form>

                    )
                }

            </Formik>


        </div >
    )
}

export default FormikComponents
