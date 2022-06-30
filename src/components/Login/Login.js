import React, { useState } from 'react'
import './Login.css';
import { auth } from '../../utils/auth'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { Input } from '../UI/Input/Input';
import { Btn } from '../UI/Button/Button';
import Box from '@mui/material/Box';
export const Login = (() => {
    const dispatch = useDispatch()
    
    let navigate = useNavigate();
    const [values, setValues] = useState({})
    function handleChange(e) {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleLogin = async (e, email = values.email, password = values.password) => {
        e.preventDefault();
        const response = await auth(email, password);
        if (response.ok) {
            dispatch({
                type: 'login', payload: {
                    user: response.data.user,
                    data: {
                        accessToken: response.headers['access-token'],
                        client: response.headers.client,
                        uid: response.headers.uid
                    }
                }
            })
            navigate("/news")
        }
    }
    return (
        <section className="login">
            <form className="login__form" onSubmit={handleLogin}>
                <h2 className="form__title">Вход</h2>
                <div className="form__inputs">
                    <Input name='email' value={values.email ||''} type='email' label='Введите ваш e-mail'onChange={handleChange}/>
                    <Input name='password' value={values.password ||''} type='password'label='Введите ваш пароль' onChange={handleChange}/>
                </div>
                <Btn className='form__button' type='submit' text='войти'/>      
            </form>
        </section>
    )
})