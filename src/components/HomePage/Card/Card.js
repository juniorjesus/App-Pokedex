import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

const nodata = <span className="card__no-img">Pokemon image not found</span>

const Card = ({ data }) => {
    const { name, image } = data;

    return (
        <li className="card  animate__animated animate__fadeIn animate__faster">
            <Link className="card__link link" to={{ pathname: `/${name}` }}>
                {image === 'No data' ? nodata : <img className="card__img img" src={image} alt={name} />}
                <span className="card__name">{name}</span>
            </Link>
        </li>
    )
}

export default Card;