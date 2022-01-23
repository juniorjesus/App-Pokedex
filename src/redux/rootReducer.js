import { combineReducers } from 'redux';
import pokemonListReducer from './pokemonList/pokemonListReducer';
import pokemonCardsReducer from './pokemonCards/pokemonCardsReducer';
import pokemonPageReducer from './pokemonPage/pokemonPageReducer';
import typeFilteredListReducer from './typeFilteredList/typeFilteredListReducer';
import navigationSmReducer from './NavigationSm/NavigationSmReducer';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';

const rootReducer = combineReducers({
    pokemonList: pokemonListReducer,
    pokemonCards: pokemonCardsReducer,
    pokemonPage: pokemonPageReducer,
    typeFilteredList: typeFilteredListReducer,
    navigationSm: navigationSmReducer,
    auth:authReducer,
    ui: uiReducer

});

export default rootReducer;