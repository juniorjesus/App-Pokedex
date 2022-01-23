import React from 'react';
import { Link } from 'react-router-dom';
import './PokemonList.scss';

const PokemonList = ({ pokemons, types }) => (
    <ul className="pokemon-list">
        {
            pokemons.map(({ name, image }) => (
                <li key={name} className="pokemon-list__item">
                    <Link className="pokemon-list__link link" to={`/${name}`}>
                        <span className="pokemon-list__name">{name}</span>
                        {image === 'No data' || types ? null : <img className="pokemon-list__img img" src={image} alt={name} />}
                    </Link>
                </li>
            ))
        }
    </ul>
)

export default PokemonList;