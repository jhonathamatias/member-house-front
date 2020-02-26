import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import Button from '../../components/UI/Button';
import Input from '../../components/UI/Form/Input';

import './style.css';

const forgetSchema = Yup.object().shape({
    email: Yup.string()
        .email('Digite um Email válido.')
        .required('O Email é obrigatório.')
});

export default function Forget() {
    const formRef = useRef(null);

    const handleSubmit = async data => {
        try {
            let result = await forgetSchema.validate(data);

            if (result) {
                formRef.current.setErrors(false);
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};
                
                err.errors.forEach(error => {
                    errorMessages.email = error;
                });
                
                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return <Form id="form-forget" ref={formRef} onSubmit={handleSubmit}>
        <Input
            icon="email"
            label="E-mail"
            id="email"
            type="text"
            name="email"
            labelProps={{ htmlFor: 'email' }}
        />
        <Button type="submit" icon="send" fullWidth id="app-button">
            Enviar
        </Button>
        <Link to="/" id="link-signin">
            Voltar
        </Link>
    </Form>;
}