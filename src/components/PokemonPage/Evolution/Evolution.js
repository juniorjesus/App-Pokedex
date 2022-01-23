import React from 'react';
import { Link } from 'react-router-dom';
import useNoData from '../../customHooks/useNoData';
import './Evolution.scss';

const View = ({ data }) => (
    data.map(({ id, name, image }) => (
        <li key={id} className="evolution__item">
            <Link to={`/${name}`} className="evolution__link link">
                <img className="img evolution__img" src={image} alt={name} />
                <span className="evolution__name">{name}</span>
            </Link>
        </li>
    ))
)

const Evolution = ({ data = [] }) => (
    <div className="evolution   ">
        <h3 className="evolution__headline pokemon__details-headline">Evolución</h3>
        {data.length > 1 || data.length === 0 ? null : <p className="evolution__fail">Este Pokemón no tiene Evolución</p>}
        <ul className="evolution__list">
            {useNoData(data, <View data={data}/>)}
        </ul>
    </div>
)

export default Evolution;