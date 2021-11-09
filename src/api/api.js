import axios from 'axios';

export function apiLogin(emailInput, passwordInput) {
    const url = 'https://reqres.in/api/login';
    return axios.post(url, {
        email: emailInput,
        password: passwordInput
    })
}

export function apiRegister(emailInput, passwordInput) {
    const url = 'https://reqres.in/api/register';
    return axios.post(url, {
        email: emailInput,
        password: passwordInput
    })
}

export function getUsers(page) {
    const url = `https://reqres.in/api/users?per_page=10&page=${page}`;
    return axios.get(url)
}

export const api = function (url, method) {
    if (method === 'GET') {
        let response = axios.get(url);
        return (response)
    }
}