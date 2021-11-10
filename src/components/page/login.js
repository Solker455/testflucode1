import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../api/api";

export function Login() {
    const auth = useSelector(state => state.tokenReducer.auth);
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmit = data => {
        apiLogin(data.email, data.password).then(() => {
            dispatch({ type: "ADD_TOKEN" });
        }).catch(() => {
            setMessage('Пользователь не найден')
        }
        )
    }
    if (!auth) {
        return <Form text='Вход' reg={register} submit={handleSubmit} err={errors} message={message} onsubmit={onSubmit} />
    } else {
        return (<Redirect to="/listusers" />)
    }
}