import React from 'react';
import classNames from 'classnames';

export default function Row({ children, className, ...rest }) {
    const classes = classNames('row', { [className]: className });

    return <div className={classes}>
        {children}
    </div>;
}