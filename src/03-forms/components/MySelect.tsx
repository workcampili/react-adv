import { ErrorMessage, useField } from 'formik'
import React from 'react'

interface Props {
    label: string,
    name: string,
    placeholder?: string
    [x: string]: any
}

export const MySelect = ({ label, ...props }: Props) => {

    // const [field, meta] = useField(props)
    const [field] = useField(props)
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select  {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="custom-span-error" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}

export default MySelect
