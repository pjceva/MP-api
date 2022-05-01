import { createRoutesFromChildren, Link } from "react-router-dom";
import { Container } from "./styles";
import React from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";

const SignupForm = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            passwordConfirmation: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
            .required('Obrigatório')
            .min(3, 'Deve ter no mínimo 5 caracteres')
            .max(20, 'Deve possuir 20 caracteres ou menos'),
            password: Yup.string()
            .required('Obrigatório')
            .min(5, 'Deve ter no mínimo 5 caracteres')
            .max(20, 'Deve ter 20 caracteres ou menos'),
            passwordConfirmation: Yup.string()
            .required('Obrigatório')   
            .oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
        }),
        onSubmit: values => {
            let user =  {
                username: values.username,
                password: values.password
            }
            axios.post('http://localhost:3000/api/v1/user/create', {user}).then(response => {
                if (response.status == 201) {   
                    window.location.href = 'http://localhost:2000/recomendacao'
                }
                else {
                    alert("Um erro ocorreu. Por favor, tente novamente mais tarde.")
                }
            }).catch(function(error) {
                alert("Usuário já existe.")
            })
        },
    });
    return (
            <form onSubmit={formik.handleSubmit}>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="login"
                    {...formik.getFieldProps('username')}
                />
                { formik.touched.username && formik.errors.username ? <div class="form-error">{formik.errors.username}</div>   : null }

                <input
                    className="login"
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...formik.getFieldProps('password')}
                />
                { formik.touched.password && formik.errors.password ? <div class="form-error">{formik.errors.password}</div> : null }

                <input
                    className="login"
                    id="passwordConfirmation"
                    type="password"
                    placeholder="Confirm password"
                    {...formik.getFieldProps('passwordConfirmation')}
                />
                { formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? <div class="form-error">{formik.errors.passwordConfirmation}</div> : null }
                <button type="submit">CRIAR CONTA</button>
            </form>
    );
}

const Login = () => {
    return (

            <Container>
                <h1>Entrar com uma conta</h1>
                <input class="login" placeholder="USERNAME"></input>
                <input class="login" type="password" placeholder="PASSWORD"></input>
                <button><Link to='/recomendacao'>ENTRAR</Link></button>
                <h1>Criar uma conta</h1> 
                <SignupForm/>
                <h1>Entrar sem conta</h1>
                <button><Link to='/music'>CONVIDADO</Link></button>             
            </Container>
    );
}

export default Login;