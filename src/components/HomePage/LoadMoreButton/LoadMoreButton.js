import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMoreCards } from '../../../redux/pokemonCards/pokemonCardsActions';
import SpinnerSm from '../../SpinnerSm';
import './LoadMoreButton.scss';

const LoadMoreButton = () => {
    const dispatch = useDispatch();
    const { loadMore: { status, offset, maxData } } = useSelector(state => state.pokemonCards);

    return (
        <button className={offset >= maxData ? "load-more hide" : "load-more"} onClick={() => dispatch(getMoreCards())}>
            <span className="load-more__text">Cargar mas</span>
            <SpinnerSm show={status || false} />
        </button>
    )
}

export default LoadMoreButton;