import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { Menu, Dropdown, Button } from "antd"

export function Home() {
    const dispatch = useDispatch();
    const handleMenuClick = e => {
        dispatch({ type: 'SET_LANGUAGE', payload: e.key });
    };
    const menu = (
        <Menu onClick={handleMenuClick}>
            <Menu.Item key="ENGLISH">English</Menu.Item>
            <Menu.Item key="RUSSIAN">Русский</Menu.Item>
            <Menu.Item key="FRENCH">Français</Menu.Item>
        </Menu>
    );
    return (
        <Dropdown
            overlay={menu}
        >
            <Button className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Language
            </Button>
        </Dropdown>
    )
}