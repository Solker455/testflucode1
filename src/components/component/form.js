import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from 'antd';

export function Form(props) {
    return (
        <div className='authForm'>
            <h1>{props.text}</h1>
            <form className="form" onSubmit={props.handlesubmit(props.onsubmit)}>
                <input className="input" {...props.register("email", { required: 'Email обязательное поле', pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите действующую электронную почту' } })} placeholder="Email" type="text" />
                <input className="input" {...props.register("password", { required: 'Пароль обязательное поле', minLength: { value: 6, message: 'Пароль не меньше 6 символов' } })} placeholder="Пароль" type="password" />
                <ErrorMessage errors={props.errors} name="email" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <ErrorMessage errors={props.errors} name="password" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <div className="error">{props.message}</div>
                <hr />
                <Button type="primary" htmlType="submit" size='large' loading={props.loading} shape='round' onClick={() => props.clearErrors()}>{props.text}</Button>
            </form>
        </div>
    )
}