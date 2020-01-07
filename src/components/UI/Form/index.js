import React from 'react';

export default function Form({ children, onSubmit, ...rest }) {
    return <form {...rest} onSubmit={ev => {
        ev.preventDefault();

        const fields = ev.target.querySelectorAll('[name]');

        const values = {};

        fields.forEach(field => {
            values[field.name] = field.value;
        });

        onSubmit(values, ev);
    }}>
        {children}
    </form>
}