import { useDispatch, useSelector } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { useState } from "react";

export function Register() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    let message = useSelector(state => state.login.message)
    let [loadingButton, setLoadingButton] = useState(false)
    const dispatch = useDispatch();
    const onSubmit = input => {
        setLoadingButton(true)
        dispatch({type: 'SET_REGISTER', payload: input});
        setLoadingButton(false)
    }
    return <Form text='Регистрация' register={register} handlesubmit={handleSubmit} loading={loadingButton} errors={errors} message={message} onsubmit={onSubmit} clearErrors={clearErrors} />
}