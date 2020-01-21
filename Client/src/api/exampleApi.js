import axios from 'axios';

export function getOffices() {
    return axios({
        method: 'get',
        url: 'http://localhost:50744/api/Offices'
    });
}

export function getProjects() {
    return axios({
        method: 'get',
        url: 'http://localhost:50744/projects'
    });
}