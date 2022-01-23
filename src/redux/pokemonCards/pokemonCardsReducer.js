import { POKEMON_CARDS_SUCCESS, POKEMON_CARDS_FAILURE, GET_MORE_CARDS } from './pokemonCardsTypes';

const initialState = {
    pokemonCards: [],
    pokemonCardsLoading: true,
    pokemonCardsError: false,
    pokemonCardsCache: false,
    loadMore: {
        status: false,
        limit: 12,
        offset: 0,
        maxData: 1117
    }
}

const pokemonCardsReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case POKEMON_CARDS_SUCCESS:
            return { 
                ...state, 
                pokemonCardsLoading: false, 
                pokemonCardsError: false,
                pokemonCardsCache: true,
                pokemonCards: [ ...state.pokemonCards, ...payload ],
                loadMore: { 
                    ...state.loadMore, 
                    status: false,
                } 
            }
        case POKEMON_CARDS_FAILURE:
            return { 
                ...state, 
                pokemonCardsLoading: false,  
                pokemonCardsError: true,
                loadMore: {
                    ...state.loadMore,
                    status: false
                } 
            }
        case GET_MORE_CARDS: 
            return { 
                ...state, 
                pokemonCardsCache: false, 
                loadMore: {
                    ...state.loadMore,
                    status: true,
                    offset: state.loadMore.offset + 12 
                } 
            }
        default:
            return state;
    }
}



export default pokemonCardsReducer;