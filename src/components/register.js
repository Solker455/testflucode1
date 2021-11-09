import React, { useState } from "react";
import { apiRegister } from "../api/api";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from 'antd';

export function Register() {
    let [message, setMessage] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const token = useSelector(state => state.tokenReducer.token)
    const onSubmit = data => {
        apiRegister(data.email, data.password).then(response => {
            dispatch({ type: "ADD_TOKEN", token: response.data.token });
        }).catch(() => { setMessage('Ошибка регистрации') }
        )
    }
    if (!token) {
        return (
            <div>
                <h1>Регистрация</h1>
                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" {...register("email", { required: 'Email обязательное поле', pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите действующую электронную почту' } })} placeholder="Email" type="text" />
                    <input className="input" {...register("password", { required: 'Пароль обязательное поле', minLength: { value: 6, message: 'Пароль не меньше 6 символов' } })} placeholder="Пароль" type="password" />
                    <ErrorMessage errors={errors} name="email" as="div" className="error">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                { message }
                            ))
                        }
                    </ErrorMessage>
                    <ErrorMessage errors={errors} name="password" as="div" className="error">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                { message }
                            ))
                        }
                    </ErrorMessage>
                    <div>{message}</div>
                    <hr />
                    <Button type="primary" htmlType="submit">Зарегистрироваться</Button>
                </form>
                <div>{message}</div>
            </div>
        )
    } else {
        return (<Redirect to="/listusers" />)
    }
}