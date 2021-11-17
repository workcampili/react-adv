import { useField, ErrorMessage } from 'formik'
import React from 'react'

interface Props {
    label: string,
    name: string,
    type?: 'text' | 'email' | 'password'
    placeholder?: string
    [x: string]: any
}

export const MyTextInput = ({ label, ...props }: Props) => {

    //const [field, meta] = useField(props)
    const [field] = useField(props)
    // console.log(field)

    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="custom-span-error" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
