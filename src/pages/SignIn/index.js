import React, { useRef } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import { signInRequest } from '~/store/modules/auth/actions';

import Button from '../../components/UI/Button';
import Input from '../../components/UI/Form/Input';
import Row from '../../components/UI/Row';
import Checkbox from '../../components/UI/Checkbox';

import './style.css';

const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido.')
        .required('O email é obrigatório.'),
    password: Yup.string()
        .min(6, 'A senha é muito curta.')
        .required('A senha é obrigatória.')
});

export default function SignIn() {
    const formRef = useRef(null);
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);

    const handleSubmit = async data => {
        try {
            const result = await signinSchema.validate(data, {
                abortEarly: false
            });
            
            if (result) {
                formRef.current.setErrors(false);
                dispatch(signInRequest(result.email, result.password));
            }
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach(error => {
                    errorMessages[error.path] = error.message;
                });

                formRef.current.setErrors(errorMessages);
            }
        }
    };

    return <Form ref={formRef} id="form-signin" onSubmit={handleSubmit}>
        <Input
            icon="email"
            label="E-mail"
            id="email"
            name="email"
            type="text"
            labelProps={{ htmlFor: "email" }}
        />
        <Input
            icon="lock"
            label="Senha"
            id="password"
            name="password"
            type="password"
            labelProps={{ htmlFor: "password" }}
        />
        <Row>
            <div className="col s12">
                <Checkbox label="Manter-me conectado" />
            </div>
        </Row>
        <Button
            icon="input"
            fullWidth id="app-button"
            type="submit"
        >
            Entrar
        </Button>
        <Link to="/forget" id="link-forget" className="small">
            Esqueci minha senha
        </Link>
    </Form >;
}