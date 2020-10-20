import React from 'react';
import styles from './FormsControls.module.css';

let chooseEl = (el, input, props) => {
    switch (el){
        case 'textarea':
            return <textarea {...input} {...props} />
        case 'input':
            return <input {...input} {...props} />
    }
}

const FormsControls = ({ input, meta, element, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                {chooseEl(element, input, props)}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormsControls element="textarea" {...props}></FormsControls>
}

export const Input = (props) => {
    return <FormsControls element="input" {...props} ></FormsControls>
}