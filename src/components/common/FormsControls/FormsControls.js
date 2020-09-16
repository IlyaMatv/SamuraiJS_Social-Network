import React from 'react'
import classes from './FormControls.module.css'
import { Field } from 'redux-form'


const FormControl = ({ input, meta, child, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={classes.formControl + ' ' + (hasError ? classes.error : ' ')}>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const { input, meta, child, ...restProps } = props
    return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field 
            placeholder={placeholder} 
            name={name}
            validate={validators}
            component={component}
            {...props}
        /> {text}
    </div>
)