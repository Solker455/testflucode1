import axios from 'axios';

export function apiLogin(emailInput, passwordInput) {
    const url = 'https://reqres.in/api/login';
    return axios.post(url, {
        email: emailInput,
        password: passwordInput
    }).catch(error => {
        return error.response
    })
}

export function apiRegister(emailInput, passwordInput) {
    const url = 'https://reqres.in/api/register';
    return axios.post(url, {
        email: emailInput,
        password: passwordInput
    }).catch(error => {
        return error.response
    })
}

export function getUsers(perPage, page) {
    const url = `https://reqres.in/api/users?page=${page}&per_page=${perPage}`;
    return axios.get(url) 
}