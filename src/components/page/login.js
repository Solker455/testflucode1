import { useDispatch, useSelector } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { asyncThunkLogin } from "../../store/asyncThunk";

export function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    let message = useSelector(state => state.auth.message)
    const dispatch = useDispatch();
    const onSubmit = input => {
        dispatch(asyncThunkLogin(input.email, input.password));
    }
    return <Form text='Вход' register={register} handlesubmit={handleSubmit} errors={errors} message={message} onsubmit={onSubmit} />
}