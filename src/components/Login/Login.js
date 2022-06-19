import React, { useState } from 'react'
import './Login.css';
import { auth, requestTransform } from '../../utils/auth'
import UserStore from '../../utils/store/UserData';
import { observer } from "mobx-react"
import { useNavigate } from "react-router-dom";
export const Login = observer(() => {
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
            UserStore.handleLogin({
                user: response.data.user,
                auth: {
                    accessToken: response.headers['access-token'],
                    client: response.headers.client,
                    uid: response.headers.uid
                }
            })
            localStorage.setItem('login', UserStore.login)
            localStorage.setItem('user', JSON.stringify(UserStore.user.user))
            localStorage.setItem('token', JSON.stringify(UserStore.user.auth))
            requestTransform(UserStore.user.auth)
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