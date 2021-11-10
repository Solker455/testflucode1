import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { apiRegister } from "../../api/api";
import { addActionCreator_token } from "../../store/slice";

export function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let [message, setMessage] = useState('');
    const dispatch = useDispatch();
    const onSubmit = data => {
        apiRegister(data.email, data.password).then((responce) => {
            dispatch(addActionCreator_token(responce.data.token));
        }).catch(() => {
            setMessage('Ошибка регистрации')
        }
        )
    }
    return <Form text='Регистрация' register={register} handlesubmit={handleSubmit} errors={errors} message={message} onsubmit={onSubmit} />
}