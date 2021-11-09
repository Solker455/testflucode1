import React from "react";
import { useState } from "react";
import { apiLogin } from "../api/api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from 'antd';

export function Login() {
    let [message, setMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const token = useSelector(state => state.tokenReducer.token)
    const onSubmit = data => {
        apiLogin(data.email, data.password).then(response => {
            dispatch({ type: "ADD_TOKEN", token: response.data.token });
        }).catch(() => { setMessage('Пользователь не найден') }
        )
    }
    if (!token) {
        return (
            <div>
                <h1>Вход</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" {...register("email", { required: 'обязательное поле', pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите действующую электронную почту' } })} placeholder="Email" type="text" />
                    <input className="input" {...register("password", { required: 'обязательное поле', minLength: { value: 6, message: 'Пароль не меньше 6 символов' } })} placeholder="Пароль" type="password" />
                    <ErrorMessage errors={errors} name="email">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                    <ErrorMessage errors={errors} name="password">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                <p key={type}>{message}</p>
                            ))
                        }
                    </ErrorMessage>
                    <div>{message}</div>
                    <hr />
                    <Button type="primary" htmlType="submit">Войти</Button>
                </form>
            </div>
        )
    } else {
        return (<Redirect to="/listusers" />)
    }
}