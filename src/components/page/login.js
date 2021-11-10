import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { apiLogin } from "../../api/api";
import { addActionCreator_token } from "../../store/slice";

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmit = data => {
        apiLogin(data.email, data.password).then((responce) => {
            dispatch(addActionCreator_token(responce.data.token));
        }).catch(() => {
            setMessage('Пользователь не найден')
        }
        )
    }
    return <Form text='Вход' reg={register} submit={handleSubmit} err={errors} message={message} onsubmit={onSubmit} />
}