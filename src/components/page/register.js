import { useDispatch, useSelector } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { asyncThunkRegister } from "../../store/asyncThunk";

export function Register() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    let message = useSelector(state => state.auth.message)
    const dispatch = useDispatch();
    const onSubmit = input => {
        dispatch(asyncThunkRegister(input.email, input.password));
    }
    return <Form text='Регистрация' register={register} handlesubmit={handleSubmit} errors={errors} message={message} onsubmit={onSubmit} clearErrors={clearErrors} />
}