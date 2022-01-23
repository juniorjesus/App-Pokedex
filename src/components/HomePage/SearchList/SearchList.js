import React, { useEffect } from 'react';
import Spinner from '../../Spinner';
import PokemonList from '../../PokemonList';
import { useDispatch, useSelector } from 'react-redux';
import getPokemonList from '../../../redux/pokemonList/pokemonListActions';

const FilterFail = () => (
    <p className="pokemon-list__failed">Pokemons not found</p>
)

const SearchList = () => {
    const dispatch = useDispatch();
    const { pokemonListLoading, pokemonListError, pokemonListSearch, pokemonListCache } = useSelector(state => state.pokemonList);
    const pokemonList = useSelector(state => {
        if (pokemonListSearch) {
            return state.pokemonList.pokemonList.filter(item => item.name.includes(pokemonListSearch));
        }

        return state.pokemonList.pokemonList
    })

    useEffect(() => {
        if (!pokemonListCache) {
            if (window.matchMedia('(min-width: 768px)').matches) {
                dispatch(getPokemonList());
            }
        }
    }, [dispatch, pokemonListCache]);

    if (pokemonListLoading) {
        return <Spinner sm />
    }

    if (pokemonListError) {
        return <p>Something goes wrong</p>
    }

    if (pokemonList.length === 0) {
        return <FilterFail />
    }

    return (
        <div className="search-list">
            <PokemonList pokemons={pokemonList} />
        </div>
    )
}

export default SearchList;