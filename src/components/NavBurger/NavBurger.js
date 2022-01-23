import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/NavigationSm/NavigationSmActions';
import './NavBurger.scss';

const NavBurger = () => {
    const burger = useRef();
    const dispatch = useDispatch();

    useEffect(() => burger.current.focus());

    return (
        <button ref={burger} className="nav-burger" aria-label="navigation" onClick={() => dispatch(toggleMenu())}>
            <span></span>
            <span></span>
            <span></span>
        </button>
    )
}

export default NavBurger;