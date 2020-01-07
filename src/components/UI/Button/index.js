import React from 'react';
import classNames from 'classnames';
import posed from 'react-pose';
import Icon from '../Icon';

import './style.css';

const ButtonAnimation = posed.div({
    pressable: true,
    init: {
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    press: {
        scale: 1.1,
        boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
    }
});


export default function Button({ children, icon, className, fullWidth, ...rest }) {
    const classes = classNames('waves-effect', 'waves-light', 'btn', 'button', { 
        [className]: className,
        'fullwidth': fullWidth,
    });

    return <ButtonAnimation>
        <button className={classes} {...rest}>
            {icon ? <Icon className="icon" >{icon}</Icon> : null}
            {children}
        </button>
    </ButtonAnimation>;
}