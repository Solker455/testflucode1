import React from "react";
import { getUsers } from "../api/api";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, Pagination } from 'antd';

export function ListUsers() {
    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);

    function nextPage(page) {
        setPage(page)
        console.log(page)
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
    return (
        <div>
            <h1>Пользователи</h1>
            <Pagination defaultCurrent={1} total={12} perPage={5} onChange={nextPage} />
            <Table dataSource={data} columns={columns} pagination={false} />
        </div>
    )
}