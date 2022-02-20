import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { types } from '../../types/types';

export const Navbar = () => {
    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    const { logout } = types;
    
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({ type: logout });
        navigate('/login', {
            replace: true
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                ButcherSys
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        { name }
                    </span>
                    <button 
                        className="nav-item nav-link btn" 
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}