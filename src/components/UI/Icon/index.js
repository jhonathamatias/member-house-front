import React from 'react';
import classNames from 'classnames';

export default function Icon({ children, className, rest }) {
    return <div className={classNames('material-icons', { [className]: className })} {...rest}>
        {children}
    </div>;
}