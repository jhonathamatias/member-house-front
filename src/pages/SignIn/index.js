import React from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import Form from '../../components/UI/Form';
import Button from '../../components/UI/Button';
import InputField from '../../components/UI/InputField';
import Row from '../../components/UI/Row';
import Checkbox from '../../components/UI/Checkbox';

import './style.css';

const signinSchema = Yup.object().shape({
    email: Yup.string()
        .email('Email inválido')
        .required('Campo obrigatório'),
    password: Yup.string()
        .min(8, 'A senha é muito curta')
        .required('Campo obrigatório')
});

export default function SignIn() {
    const dispatch = useDispatch();
    const state = useSelector(state => state.auth);

    const submitHandler = values => {
        signinSchema.isValid(values).then(function (value) {
            console.log(value);
        }).catch(function (error) {
            console.log(error);
        });
    };

    return <Form id="form-signin" onSubmit={submitHandler}>
            <InputField
                icon="email"
                label="E-mail"
                id="email"
                name="email"
                type="email"
                labelProps={{ htmlFor: "email" }}
            />
            <InputField
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