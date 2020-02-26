import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import classNames from 'classnames';

import Icon from '../Icon';

export default function Input({ 
    icon, 
    label, 
    containerProps, 
    labelProps, 
    className,
    name, 
    ...rest 
}) {
    const {fieldName, registerField, defaultValue, error} = useField(name);
    const classes = classNames({ "invalid": error, [className]: className });
    const inputRef = useRef(null);
    
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        });
    }, [fieldName, registerField]);

    return <div className={`input-field ${error ? 'invalid' : ''}`} {...containerProps}>
        {icon ? <Icon className="prefix">{icon}</Icon> : null}
        <input ref={inputRef} className={classes} {...rest} />
        <label {...labelProps}>{label}</label>
        <span>{error ? error : null}</span>
    </div>;
}