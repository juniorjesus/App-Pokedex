import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import getTypeFilteredList from '../../../../redux/typeFilteredList/typeFilteredListActions';
import PokemonList from '../../../PokemonList/';
import Spinner from '../../../Spinner';
import './FilteredTypes.scss';

const FilteredTypes = ({ type }) => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { typeFilteredList, typeFilteredListLoading, typeFilteredListError } = useSelector(state => state.typeFilteredList);

    useEffect(() =>  dispatch(getTypeFilteredList(type)), [dispatch, type]);

    if (typeFilteredListError) {
        return (
            <div className="type-filter-fail">
                <p className="type-filter-fail__text">Wrong pokemon type</p>
                <Link className="type-filter-fail__button" to={`/${id}`}>back</Link>
            </div>
        )
    }

    if (typeFilteredListLoading) {
        return <Spinner sm />
    }

    return (
        <>
            <Link className="type-filter-close link" to={`/${id}`}>
                <span className="name">{type}</span>
                <span className="icon">&times;</span>
            </Link>
            <div className="filtered-types">
                <PokemonList pokemons={typeFilteredList} types />
            </div>
        </>
    )
}

export default FilteredTypes;