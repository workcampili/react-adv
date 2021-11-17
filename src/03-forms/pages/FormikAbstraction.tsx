import React from 'react'
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'
import { MyTextInput, MyCheckBox, MySelect } from '../components/';


export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Abstraction</h1>

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
                })}
            >
                {
                    (formik) => (
                        <Form noValidate>

                            <MyTextInput
                                name="firstName"
                                type="text"
                                label="First Name"
                                placeholder="ingresa tu nombre"
                            />

                            {/* <label htmlFor="firstName">FirstName</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component="span" /> */}

                            <MyTextInput
                                name="lastName"
                                type="text"
                                label="Last Name"
                                placeholder="ingresa tu apellido"
                            />



                            <MyTextInput
                                name="email"
                                type="email"
                                label="Email"
                                placeholder="john@gmail.com"
                            />

                            <MySelect label="Job Type" name="jobType" >
                                <option value="">Select a Job type</option>
                                <option value="fullTime">Full Time</option>
                                <option value="partTime">Part Time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </MySelect>




                            {/* <label htmlFor="jobType">Job Type</label>
                            <Field name='jobType' as='select'>
                                <option value="">Select a Job type</option>
                                <option value="fullTime">Full Time</option>
                                <option value="partTime">Part Time</option>
                                <option value="freelance">Freelance</option>
                                <option value="internship">Internship</option>
                            </Field>
                            <ErrorMessage name='jobType' component="span" /> */}

                            <MyCheckBox label={'Accrept Terms & Conditions'} name={'terms'} />

                            {/* <label>
                                <Field name='terms' type='checkbox' />
                                Terms and Conditions
                            </label>
                            <ErrorMessage name='terms' component="span" /> */}

                            <button type="submit">Submit</button>

                        </Form>

                    )
                }

            </Formik>


        </div >
    )
}


