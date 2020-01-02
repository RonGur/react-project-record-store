import axios from 'axios';
import Cookies from 'universal-cookie';

const SERVER_URL = 'http://localhost:5000';

export const register = newUser => {
    return axios
        .post(`${SERVER_URL}/api/register`, {
            username: newUser.username,
            password: newUser.password
        })
        .then(response => {
            if (response.status === 200) {
                alert(response.data.message);
                window.location = '/login';
            }})
        .catch(err => alert(err.response.data.message));

}

export const login = newUser => {
    return axios
        .post(`${SERVER_URL}/api/login`, {
            username: newUser.username,
            password: newUser.password,
            remember_me: newUser.remember_me},
            {withCredentials: true})
        .then(response => {
            return response.data
        })
        .catch(err => alert(err.response.data.message))
}

export const isAuthenticated = () =>{
    const cookies = new Cookies();
    const cookie = cookies.get('username');
    return !!cookie;
};

export const logOutUser = () =>{
    const cookies = new Cookies();
    cookies.remove('username');
};

export const getUsername = () =>{
    const cookies = new Cookies();
    const username = cookies.get('username');
    return username;
};

export const isAdmin = () => {
    const cookies = new Cookies();
    const username = cookies.get('username');
    return (username === "admin");
};

export const logActivity = (activity) => {
    const timestamp = new Date().toLocaleString();
    const cookies = new Cookies();
    const username = cookies.get('username');
    if (!username) return;
    return axios
        .post(`${SERVER_URL}/api/log-activity`, {username: username, timestamp: timestamp, activity: activity})
        .catch(err => console.log("Logging Failed: " + err.message));
};


export const getActivityLog = () => {
    return axios.get(`${SERVER_URL}/api/log-activity`)
        .then(response => response.data)
        .catch(err => alert(err.response.data.message));
};
