import { TYPE_FILTERED_LIST_LOADING, TYPE_FILTERED_LIST_SUCCESS, TYPE_FILTERED_LIST_FAILURE } from './typeFilteredListTypes';
import PokemonService from '../../service/pokemonService';

const service = new PokemonService();

const getTypeFilteredList = (type) => async dispatch => {
    try {
        dispatch({ type: TYPE_FILTERED_LIST_LOADING });

        const typeFilteredList = await service.getFilteredTypes(type);
        dispatch({ type: TYPE_FILTERED_LIST_SUCCESS, payload: typeFilteredList })
    } catch {
        dispatch({ type: TYPE_FILTERED_LIST_FAILURE })
    }
}

export default getTypeFilteredList;