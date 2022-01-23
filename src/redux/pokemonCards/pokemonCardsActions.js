import { POKEMON_CARDS_SUCCESS, POKEMON_CARDS_FAILURE, GET_MORE_CARDS } from './pokemonCardsTypes';
import PokemonService from '../../service/pokemonService';

const service = new PokemonService();

const getPokemonCards = (limit, offset) => async dispatch => {
    try {
        const pokemonCards = await service.getMorePokemons(limit, offset);
        dispatch({ type: POKEMON_CARDS_SUCCESS, payload: pokemonCards });
    } catch {
        dispatch({ type: POKEMON_CARDS_FAILURE })
    }
}

export const getMoreCards = () => ({ type: GET_MORE_CARDS });

export default getPokemonCards;