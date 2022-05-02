import { Link } from "react-router-dom";
import { Container } from "./styles";
import React from "react";
import { AuthContext } from "../../contexts/auth"
import { useState, useContext } from 'react'
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
                if (response.status === 201) {   
                    window.location.href = 'http://localhost:2000/'
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
    const { authenticated, login } = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        login(username, password);

        console.log('submit', {username, password});
    }


    return (

            <Container>

                <h1>Entrar com uma conta</h1>
                <p>Loged: {String(authenticated)}</p>
                <form className="form" onSubmit={handleSubmit}>
                        
                        <input className="login"
                            type="text"
                            placeholder="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        
                        <input className="login"    
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button className="button" type="submit">Entrar</button>
                </form>
                <h1>Criar uma conta</h1> 
                <SignupForm/>
                <h1>Entrar sem conta</h1>
                <button><Link to='/music'>CONVIDADO</Link></button>                
            </Container>
    );
}

export default Login;