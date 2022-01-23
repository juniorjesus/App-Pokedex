import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadMoreButton from '../LoadMoreButton/LoadMoreButton';
import Card from '../Card';
import Spinner from '../../Spinner';
import getPokemonCards from '../../../redux/pokemonCards/pokemonCardsActions';
import './PokemonCards.scss';

const PokemonCards = () => {
    const dispatch = useDispatch();
    const { pokemonCards, pokemonCardsLoading, pokemonCardsError, pokemonCardsCache, loadMore: { offset, limit } } = useSelector(state => state.pokemonCards);

    useEffect(() => {
        if (!pokemonCardsCache) {
            dispatch(getPokemonCards(limit, offset));
        }
    }, [pokemonCardsCache, dispatch, limit, offset]);

    if (pokemonCardsLoading) {
        return <Spinner sm />
    }

    return (
        <>
            <ul className="pokemon-cards   animate__animated animate__fadeIn animate__faster">
                {pokemonCards.map(data => {
                    return <Card key={data.id} data={data} />
                })}
            </ul>
            {pokemonCardsError && <p>Something goes wrong</p>}
            <LoadMoreButton />
        </>
    )
}

export default PokemonCards;