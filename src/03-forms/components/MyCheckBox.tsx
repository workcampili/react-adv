import { ErrorMessage, useField } from 'formik'
import React from 'react'

interface Props {
    label: string,
    name: string,
    [x: string]: any
}

export const MyCheckBox = ({ label, ...props }: Props) => {

    // const [field, meta] = useField({ ...props, type: 'checkbox' })
    const [field] = useField({ ...props, type: 'checkbox' })

    // console.log(field)

    return (
        <>
            <label>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className="custom-span-error" />
            {/* {
                meta.touched && meta.error && (
                    <span className="error">{meta.error}</span>
                )
            } */}
        </>
    )
}
