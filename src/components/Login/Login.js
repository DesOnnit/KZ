import React, { useState } from 'react'
import './Login.css';
import { auth, requestTransform } from '../../utils/auth'
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'

export const Login = (() => {
    const data = useSelector(state => state.auth)
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
                    auth: {
                        accessToken: response.headers['access-token'],
                        client: response.headers.client,
                        uid: response.headers.uid
                    }
                }
            })
            requestTransform(data)
            navigate("/news")
        }
    }
    return (
        <section className="login">
            <form className="login__form" onSubmit={handleLogin}>
                <h2 className="form__title">Вход</h2>
                <div className="form__inputs">
                    <input className='form__input' name='email' value={values.name} type='email' placeholder='Введите ваш e-mail' onChange={handleChange} />
                    <input className='form__input' name='password' value={values.name} type='password' placeholder='Введите ваш пароль' onChange={handleChange} />
                </div>
                <button className='form__button' type='submit'>войти</button>
            </form>
        </section>
    )
})