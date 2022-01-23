import { POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS, POKEMON_LIST_FAILURE, POKEMON_LIST_SEARCH, CLEAN_SEARCH } from './pokemonListTypes';
import PokemonService from '../../service/pokemonService';

const service = new PokemonService();

const getPokemonList = () => async dispatch => {
    try {
        dispatch({ type: POKEMON_LIST_LOADING });
        
        const pokemonList = await service.getAllPokemons();
        dispatch({ type: POKEMON_LIST_SUCCESS, payload: pokemonList });
    } catch {
        dispatch({ type: POKEMON_LIST_FAILURE });
    }
}

export const searchPokemon = searchValue => ({ type: POKEMON_LIST_SEARCH, payload: searchValue });
export const cleanSearch = () => ({ type: CLEAN_SEARCH });

export default getPokemonList;