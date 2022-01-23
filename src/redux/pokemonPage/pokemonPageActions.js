import { POKEMON_PAGE_LOADING, POKEMON_PAGE_SUCCESS, POKEMON_PAGE_FAILURE } from './pokemonPageTypes';
import PokemonService from '../../service/pokemonService';

const service = new PokemonService();

const getPokemonPage = (id) => async dispatch => {
    try {
        dispatch({ type: POKEMON_PAGE_LOADING });

        const pokemonPage = await service.getCurrentPokemon(id);
        dispatch({ type: POKEMON_PAGE_SUCCESS, payload: pokemonPage })
    } catch {
        dispatch({ type: POKEMON_PAGE_FAILURE })
    }
}

export default getPokemonPage;