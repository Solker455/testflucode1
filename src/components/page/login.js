import { useDispatch, useSelector } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { asyncThunkLogin } from "../../store/asyncThunk";
import { useState } from "react";

export function Login() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
    });
    let message = useSelector(state => state.auth.message)
    let [loadingButton, setLoadingButton] = useState(false)
    const dispatch = useDispatch();
    const onSubmit = input => {
        setLoadingButton(true)
        dispatch(asyncThunkLogin(input));
        setLoadingButton(false)
    }
    return (
        <Form text='Вход' register={register} handlesubmit={handleSubmit} loading={loadingButton} errors={errors} message={message} onsubmit={onSubmit} clearErrors={clearErrors} />
    )
}