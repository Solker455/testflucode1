import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Input, DatePicker } from "antd";
import { ErrorMessage } from "@hookform/error-message";

export function ReactForm() {
    const { handleSubmit, control, formState: { errors } } = useForm({
    });
    return (
        <form onSubmit={handleSubmit(data => console.log(data))}>
            <Controller
                control={control}
                name="name"
                rules={{
                    required: { value: true, message: 'Имя обязательное поле' },
                    pattern: { value: /^([a-zа-яё]+|\d+)$/i, message: 'Введите свое настоящее имя' }
                }}
                render={({ field: { onChange, onBlur } }) => (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder='Имя'
                        style={{ width: '30%', display: 'block' }}
                    />
                )}
            />
            <Controller
                control={control}
                name="password"
                rules={{
                    required: { value: true, message: 'Пароль обязательное поле' },
                    minLength: {value: 6, message: 'Введите пароль больше 6 символов'}
                }}
                render={({ field: { onChange, onBlur } }) => (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder='Пароль'
                        type='password'
                        style={{ width: '30%', display: 'block' }}
                    />
                )}
            />
            <Controller
                control={control}
                name="age"
                rules={{
                    required: { value: true, message: 'Возраст обязательное поле' },
                    pattern: {value: /^([0-9]+|\d+)$/i, message: 'Введите настоящий возраст'},
                    min: {value: 1, message: 'Введите возраст больше 1'},
                    max: {value: 99, message: 'Введите возраст меньше 99'}
                }}
                render={({ field: { onChange, onBlur } }) => (
                    <Input
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder='Возраст'
                        style={{ width: '30%', display: 'block' }}
                    />
                )}
            />
            <Controller
                control={control}
                name="date"
                rules={{
                    required: { value: true, message: 'Дата обязательное поле' }
                }}
                render={({ field: { onChange, onBlur } }) => (
                    <DatePicker
                        onChange={onChange}
                        onBlur={onBlur}
                        style={{ width: '30%', display: 'block' }}
                    />
                )}
            />
            <ErrorMessage errors={errors} name="name" as='div' className="error">
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([message]) => (
                        { message }
                    ))
                }
            </ErrorMessage>
            <ErrorMessage errors={errors} name="password" as='div' className="error">
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([message]) => (
                        { message }
                    ))
                }
            </ErrorMessage>
            <ErrorMessage errors={errors} name="age" as='div' className="error">
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([message]) => (
                        { message }
                    ))
                }
            </ErrorMessage>
            <ErrorMessage errors={errors} name="date" as='div' className="error">
                {({ messages }) =>
                    messages &&
                    Object.entries(messages).map(([message]) => (
                        { message }
                    ))
                }
            </ErrorMessage>

            <input type="submit" />
        </form>
    );
}