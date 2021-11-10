import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { apiRegister } from "../../api/api";

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmit = data => {
        apiRegister(data.email, data.password).then(() => {
            dispatch({ type: "ADD_TOKEN" });
        }).catch(() => {
            setMessage('Ошибка регистрации')
        }
        )
    }
    return <Form text='Регистрация' reg={register} submit={handleSubmit} err={errors} message={message} onsubmit={onSubmit} />
}