import axios from "axios"
import { types } from "../types/types"
import { setAuthToken } from "../utils/setAuthToken"

// LOAD USER 
export const loadUser = () => async dispatch => {
    if(localStorage.token)
        setAuthToken(localStorage.token);

    try {
        const res = await axios.get('http://localhost:8081/api/user');

        dispatch({
            type: types.load_user,
            payload: res.data.user
        });
    } catch (error) {
        dispatch({
            type: types.auth_error
        });
    }
}

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password });

    try {
        const res = await axios.post('http://localhost:8081/login', body, config);
        setAuthToken(res.data.token);
        dispatch({
            type: types.login,
            payload: res.data
        })
    } catch (error) {
        if (error.response.data.errors) {
            error.response.data.errors.forEach(error => console.log(error));
        }
    }
}