import React from 'react'
import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = (values: FormValues) => {

        const errors: FormikErrors<FormValues> = {}

        if (!values.firstName) {
            errors.firstName = 'Required'
        } else if (values.firstName.length > 15) {
            errors.firstName = 'Must be 15 characters or less'
        }

        if (!values.lastName) {
            errors.lastName = 'Required'
        } else if (values.lastName.length >= 10) {
            errors.lastName = 'Must be 10 characters or less'
        }
        if (!values.email) {
            errors.email = 'Required';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }

        return errors;

    }

    const { handleSubmit, handleChange, handleBlur, handleReset, touched, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values);
            handleReset(values);
        },
        validate
    })

    return (
        <div>
            <h1>Formik Basic </h1>
            <form onSubmit={handleSubmit} noValidate={true} >
                <label htmlFor="firstName">FirstName</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">LastName</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}


                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}
                <button type="submit">Submit</button>

            </form>
        </div>
    )
}

export default FormikBasicPage
