import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../../actions/auth';
import Search from '../HomePage/Search';
import NavBurger from '../NavBurger';
import './Navigation.scss';

const Navigation = () => {
    const { showMenu } = useSelector(state => state.navigationSm);

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('menu-open')
        } else {
            document.body.classList.remove('menu-open')
        }
    }, [showMenu])

    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch ( startLogout())

    }

    return (
        <>
            <NavBurger />
            <nav className="nav">
                <Search sm />
                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/' }} exact>Inicio</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/additional' }}>Pokemon Favoritos</NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/auth/login' }}>login</NavLink>
                    </li>

                    <li className="nav__item">
                        <NavLink className="nav__link link" to={{ pathname: '/auth/logout' }}>logout</NavLink>
                    </li>

                    <button 
                    className="btn"
                    onClick={ handleLogout }
                >
                    Logout
                </button>
                </ul>
            </nav>
        </>
    )
}

export default Navigation;