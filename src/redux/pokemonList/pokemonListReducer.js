import { POKEMON_LIST_LOADING, POKEMON_LIST_SUCCESS, POKEMON_LIST_FAILURE, POKEMON_LIST_SEARCH, CLEAN_SEARCH } from './pokemonListTypes';

const initialState = {
    pokemonList: [],
    pokemonListLoading: false,
    pokemonListError: false,
    pokemonListSearch: '',
    pokemonListCache: false
}

const pokemonListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POKEMON_LIST_LOADING:
            return { ...state, pokemonListLoading: true, pokemonListError: false }
        case POKEMON_LIST_SUCCESS:
            return { ...state, pokemonListLoading: false, pokemonListError: false, pokemonListCache: true, pokemonList: payload }
        case POKEMON_LIST_FAILURE:
            return { ...state, pokemonListLoading: false, pokemonListError: true }
        case POKEMON_LIST_SEARCH:
            return { ...state, pokemonListSearch: payload }
        case CLEAN_SEARCH:
            return { ...state, pokemonListSearch: '' }
        default:
            return state;
    }
}

export default pokemonListReducer;