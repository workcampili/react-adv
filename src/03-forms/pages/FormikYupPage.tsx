import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css'



export const FormikYupPage = () => {

    const { handleSubmit, handleReset,
        getFieldProps, touched, errors } = useFormik({
            initialValues: {
                firstName: '',
                lastName: '',
                email: ''
            },
            onSubmit: values => {
                console.log(values);
                handleReset(values);
            },
            validationSchema: Yup.object({
                firstName: Yup.string()
                    .max(15, 'debe tener menos de 15 caracteres')
                    .required('Requerido'),
                lastName: Yup.string()
                    .max(10, 'debe tener menos de 10 caracteres')
                    .required('Requerido'),
                email: Yup.string()
                    .email('Debe ser un email valido')
                    .required('Requerido')
            })
        });

    return (
        <div>
            <h1>Formik Yup </h1>
            <form onSubmit={handleSubmit} noValidate={true} >

                <label htmlFor="firstName">FirstName</label>
                <input type="text" {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">LastName</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


                <label htmlFor="email">Email</label>
                <input type="email"{...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Submit</button>

            </form>
        </div >
    )
}

export default FormikYupPage
