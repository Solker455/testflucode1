import React, { useState, useEffect } from "react";
import { getUsers } from "../../api/api";
import { Table, Pagination } from 'antd';

export function ListUsers() {

    let [page, setPage] = useState(1);
    let [data, setData] = useState([]);
    let [total, setTotal] = useState();
    let [perPage, setPerPage] = useState();

    const nextPage = function (page) {
        setPage(page)
    }

    useEffect(() => {
        getUsers(page).then(responce => {
            setPerPage(responce.data.per_page)
            setTotal(responce.data.total)
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

    return (
        <div>
            <h1>Пользователи</h1>
            <Pagination perPage={perPage} total={total} onChange={nextPage} />
            <Table dataSource={data} columns={columns} pagination={false} />
        </div>
    )
}