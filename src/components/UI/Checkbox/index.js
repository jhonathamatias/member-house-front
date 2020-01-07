import React from 'react';

export default function Checkbox({ label, ...rest }) {
    return <label>
        <input type="checkbox" {...rest} />
        {label ? <span>{label}</span> : null}
    </label>;
}
