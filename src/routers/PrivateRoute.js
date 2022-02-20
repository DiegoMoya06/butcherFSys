import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export const PrivateRoute = ({ children }) => {

    const { isAuthenticated } = useSelector( state => state.auth );
    
    return isAuthenticated
        ? children
        : <Navigate to="/login" />
}