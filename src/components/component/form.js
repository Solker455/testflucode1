import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { Button } from 'antd';

export function Form(obj) {
        return (
            <div>
                <h1>{obj.text}</h1>
                <form className="form" onSubmit={obj.submit(obj.onsubmit)}>
                    <input className="input" {...obj.reg("email", { required: 'Email обязательное поле', pattern: { value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Введите действующую электронную почту' } })} placeholder="Email" type="text" />
                    <input className="input" {...obj.reg("password", { required: 'Пароль обязательное поле', minLength: { value: 6, message: 'Пароль не меньше 6 символов' } })} placeholder="Пароль" type="password" />
                    <ErrorMessage errors={obj.err} name="email" as='div' className="error">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                { message }
                            ))
                        }
                    </ErrorMessage>
                    <ErrorMessage errors={obj.err} name="password" as='div' className="error">
                        {({ messages }) =>
                            messages &&
                            Object.entries(messages).map(([type, message]) => (
                                { message }
                            ))
                        }
                    </ErrorMessage>
                    <div>{obj.message}</div>
                    <hr />
                    <Button type="primary" htmlType="submit">{obj.text}</Button>
                </form>
            </div>
        )
}