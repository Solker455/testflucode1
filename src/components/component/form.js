import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from 'antd';

export function Form(obj) {

    return (
        <div className='authForm'>
            <h1>{obj.text}</h1>
            <form className="form" onSubmit={obj.handlesubmit(obj.onsubmit)}>
                <input className="input" {...obj.register("email", { required: 'Email обязательное поле', pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите действующую электронную почту' } })} placeholder="Email" type="text" />
                <input className="input" {...obj.register("password", { required: 'Пароль обязательное поле', minLength: { value: 6, message: 'Пароль не меньше 6 символов' } })} placeholder="Пароль" type="password" />
                <ErrorMessage errors={obj.errors} name="email" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <ErrorMessage errors={obj.errors} name="password" as='div' className="error">
                    {({ messages }) =>
                        messages &&
                        Object.entries(messages).map(([message]) => (
                            { message }
                        ))
                    }
                </ErrorMessage>
                <div className="error">{obj.message}</div>
                <hr />
                <Button type="primary" htmlType="submit" size='large' shape='round' onClick={() => obj.clearErrors()}>{obj.text}</Button>
            </form>
        </div>
    )
}