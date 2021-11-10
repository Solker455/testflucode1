import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../api/api";

export function Login() {
    const token = useSelector(state => state.tokenReducer.token);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmit = data => {
        apiLogin(data.email, data.password).then(response => {
            dispatch({ type: "ADD_TOKEN", token: response.data.token });
        }).catch(() => {
            setMessage('Пользователь не найден')
        }
        )
    }
    if (!token) {
        return <Form text='Вход' reg={register} submit={handleSubmit} err={errors} message={message} onsubmit={onSubmit} />
    } else {
        return (<Redirect to="/listusers" />)
    }
}