import React from 'react';
import classNames from 'classnames';
import Icon from '../Icon';

export default function InputField({ icon, label, containerProps, labelProps, error, className, ...rest }) {
    const classes = classNames({ "invalid": error, [className]: className });

    return <div className="input-field" {...containerProps}>
        {icon ? <Icon className="prefix">{icon}</Icon> : null}
        <input className={classes} {...rest} />
        <label {...labelProps}>{label}</label>
    </div>;
}