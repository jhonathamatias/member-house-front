import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/UI/Button';
import InputField from '../../components/UI/InputField';

import './style.css';

export default function Forget() {
    return <div id="form-forget">
        <InputField
            icon="email"
            label="E-mail"
            id="email"
            type="email"
            labelProps={{ htmlFor: 'email' }}
        />
        <Button icon="send" fullWidth id="app-button">
            Enviar
        </Button>
        <Link to="/" id="link-signin">
            Voltar
        </Link>
    </div>;
}