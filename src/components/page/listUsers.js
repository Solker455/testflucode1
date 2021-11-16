import React, { useState, useEffect } from "react";
import { Table, Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { asyncThunkUsers } from "../../store/asyncThunk";

export function ListUsers() {
    let [page, setPage] = useState(1);
    let dispatch = useDispatch();
    let data = useSelector(state => state.getusers.data)
    let [perPage, setPerPage] = useState(data.per_page);
    let loading = useSelector(state => state.getusers.loading);

    const nextPageChange = function (value) {
        setPage(value)
    }
    useEffect(() => {
        let pages = { perPage, page }
        dispatch(asyncThunkUsers(pages))
    }, [dispatch, page, perPage]);
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
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
            key: 'id'
        },
        {
            title: 'Имя',
            dataIndex: 'first_name',
            key: 'id'
        },
        {
            title: 'Фамилия',
            dataIndex: 'last_name',
            key: 'id'
        },
    ];
    function onShowSizeChange(current, pageSize) {
        setPerPage(pageSize)
    }
    return (
        <div>
            <h1>Пользователи</h1>
            <Pagination total={data.total} onChange={nextPageChange} showSizeChanger onShowSizeChange={onShowSizeChange} />
            <Table dataSource={data.data} columns={columns} pagination={false} rowKey='id' loading={!loading} />
        </div>
    )
}