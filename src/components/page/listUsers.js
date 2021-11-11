import React, { useState, useEffect } from "react";
import { Table, Pagination } from 'antd';
import { asyncThunkUsers } from "../../store/slice";
import { useDispatch, useSelector } from "react-redux";

export function ListUsers() {

    let [page, setPage] = useState(1);
    let dispatch = useDispatch();
    let data = useSelector(state => state.rootSlice.data);
    let loading = useSelector(state => state.rootSlice.loading);

    const nextPage = function (page) {
        setPage(page)
    }

    useEffect(() => {
        dispatch(asyncThunkUsers(page))
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
            key: 'id',
            render: avatar => <img src={avatar} alt="avatar" />
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'id',
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'id',
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'id',
        },
    ];
    if (loading) {
    return (
        <div>
            <h1>Пользователи</h1>
            <Pagination perPage={data.perPage} total={data.total} onChange={nextPage} />
            <Table dataSource={data.data} columns={columns} pagination={false} rowKey='id' />
        </div>
    )}else{
        return(<div>Загрузка</div>)
    }
}