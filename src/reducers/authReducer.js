import { types } from "../types/types";


const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: {}
}

export const authReducer = (state = initialState, action) => {
    const { login, login_success, login_failed, load_user, auth_error, logout } = types;
    const { type, payload } = action;

    switch (type) {
        case login:
            localStorage.setItem('token', payload.token); 
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case load_user:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            };
        case auth_error: 
            return{};
        case logout: 
            localStorage.removeItem('token');
            return {
                isAuthenticated: false
            }
        
        default:
            return state;
    }
}