import { useDispatch, useSelector } from "react-redux";
import { Form } from "../component/form";
import { useForm } from "react-hook-form";
import { FormattedMessage } from 'react-intl';

export function Register() {
    const { register, handleSubmit, formState: { errors }, clearErrors } = useForm();
    let message = useSelector(state => state.login.message)
    let loadingButton = useSelector(state => state.login.loading)
    const dispatch = useDispatch();
    const onSubmit = input => {
        dispatch({type: 'SET_REGISTER', payload: input});
    }
    return <Form text={<FormattedMessage id='H1_PAGE_REGISTER' />} register={register} handlesubmit={handleSubmit} loading={loadingButton} errors={errors} message={message} onsubmit={onSubmit} clearErrors={clearErrors} />
}