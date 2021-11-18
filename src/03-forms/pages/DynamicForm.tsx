import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup'

//console.log(formJson)

const initialvalues: { [key: string]: any } = {}
const fieldsWithValidation: { [key: string]: any } = {}




for (const input of formJson) {
    initialvalues[input.name] = input.value
    if (!input.validations || input.validations.length === 0) continue;

    let schema = Yup.string()

    for (const rule of input.validations) {
        if (rule.type === 'required') {
            schema = schema.required('Este campo es requerido')
        }
        if (rule.type === 'minLength') {
            schema = schema.min((rule as any).value || 2, ` El valor debe ser mayor a  ${(rule as any).value || 2}`)
        }
        if (rule.type === 'maxLength') {
            schema = schema.max((rule as any).value || 15, ` El valor debe ser menor  a  ${(rule as any).value || 15}`)
        }
        if (rule.type === 'email') {
            schema = schema.email('El email no es valido')
        }
    }

    fieldsWithValidation[input.name] = schema
}

const validationSchema = Yup.object({ ...fieldsWithValidation })


export const DynamicForm = () => {


    return (
        <div>
            <h1>Dynamic Form</h1>
            <Formik
                initialValues={initialvalues}
                validationSchema={validationSchema}

                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {
                    ({ handleReset }) => (
                        <Form noValidate>
                            {/* <span>Hola mundo</span>
                            <button type="submit">Submit</button> */}
                            {formJson.map(({ type, name, placeholder, label, options }) => {
                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return <MyTextInput
                                        key={name}
                                        type={type as any}
                                        name={name}
                                        label={label}
                                        placeholder={placeholder}
                                    />
                                } else if (type === 'select') {
                                    return (
                                        <MySelect
                                            key={name}
                                            label={label}
                                            name={name}
                                        >
                                            <option value="">Selecciona una opcion</option>
                                            {
                                                options?.map(({ id, name }) => (
                                                    <option key={id} value={id}>{name}</option>
                                                ))
                                            }


                                        </MySelect>
                                    )
                                }
                                throw new Error(`El Type: ${type} no es soportado`)

                            })}
                            <button type="submit">Submit</button>
                            <button type="button" onClick={handleReset}>Reset</button>
                        </Form>
                    )
                }
            </Formik>
        </div >
    )
}

export default DynamicForm
