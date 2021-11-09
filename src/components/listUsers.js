import React from "react";
import { getUsers } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { Redirect } from "react-router";
import { useSelector } from "react-redux";
import { Table, Button } from 'antd';

export function ListUsers() {
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);
    const token = useSelector(state => state.tokenReducer.token)

    function prevPage(e) {
        e.preventDefault();
        if (page > 1) {
            setPage(page - 1)
        }
    }
    function nextPage(e) {
        e.preventDefault();
        if (page < 2) {
            setPage(page + 1)
        }
    }

    useEffect(() => {
        getUsers(page).then(responce => {
            setData(responce.data.data);
        });
    }, [page]);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Аватарка',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <img src={avatar} alt="avatar" />
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'last_name',
        },
    ];
    for (let i = 0; i > data.length; i++) {
        data.push({
            key: i
        });
    }
    if (token) {
        return (
            <div>
                <h1>Пользователи</h1>
                <div className="page">
                    <Button type="primary" onClick={prevPage}>Предыдущая страница</Button> <Button type="primary" onClick={nextPage}>Следующая страница</Button>
                </div>
                <Table dataSource={data} columns={columns} pagination={false} />;
            </div>
        )
    } else {
        return (<Redirect to="/login" />)
    }
}