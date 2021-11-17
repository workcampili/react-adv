import React, { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'

import '../styles/styles.css'

export const RegisterPage = () => {

    const initialState = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }

    const {
        formData,
        name,
        email,
        password1,
        password2,
        handleOnChange,
        resetForm,
        isValidEmail
    } = useForm(initialState)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
        resetForm()

    }




    return (
        <div>
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit} noValidate={true}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    name="name"
                    onChange={handleOnChange}
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={handleOnChange}
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>El email no es valido</span>}
                <input
                    type="password"
                    placeholder="Password"
                    value={password1}
                    name="password1"
                    onChange={handleOnChange}
                />
                {password1.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password1.trim().length < 5 && password1.trim().length > 0 && <span>La password debe tener mas de 5 caracteres</span>}
                <input
                    type="password"
                    placeholder="Repeat Password"
                    value={password2}
                    name="password2"
                    onChange={handleOnChange}
                />
                {password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
                {password2.trim().length > 0 && password1.trim() !== password2.trim() && <span>no coinciden las passwords</span>}

                <button type="submit">Register</button>
                <button type="button" onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}

export default RegisterPage
