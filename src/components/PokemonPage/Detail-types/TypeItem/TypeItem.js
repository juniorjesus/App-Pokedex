import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import './TypeItem.scss';

const TypeItem = ({ data }) => {
    const { url } = useRouteMatch();

    return (
        data.map((item, index) => (
            <li className="type-item" key={index}>
                <Link className="type-item__link link" to={`${url}?type=${item}`}>{item}</Link>
            </li>
        ))
    )
}

export default TypeItem;