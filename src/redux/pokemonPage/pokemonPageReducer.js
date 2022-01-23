import { POKEMON_PAGE_LOADING, POKEMON_PAGE_SUCCESS, POKEMON_PAGE_FAILURE } from './pokemonPageTypes';

const initialState = {
    pokemonPage: [],
    pokemonPageLoading: true,
    pokemonPageError: false
}

const pokemonPageReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POKEMON_PAGE_LOADING:
            return { ...state, pokemonPageLoading: true, pokemonPageError: false }
        case POKEMON_PAGE_SUCCESS:
            return { ...state, pokemonPageLoading: false, pokemonPageError: false, pokemonPage: payload }
        case POKEMON_PAGE_FAILURE:
            return { ...state, pokemonPageLoading: false, pokemonPageError: true }
        default:
            return state;
    }
}

export default pokemonPageReducer;