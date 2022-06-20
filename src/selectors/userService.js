import axios from 'axios';

export const getUsersService = () => {
    return axios.get('http://localhost:8080/api/users');
}

export const getUserByIdService = (id) => {
    return axios.get(`http://localhost:8080/api/users/${id}`);
}

export const createUserService = (user) => {
    return axios.post('http://localhost:8080/api/users', user);
}

export const updateUserService = (user) => {
    return axios.put(`http://localhost:8080/api/users/${user.id}`, user);
}

export const deleteUserService = (id) => {
    return axios.delete(`http://localhost:8080/api/users/${id}`);
}