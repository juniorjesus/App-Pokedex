import { HIDE_MENU, TOGGLE_MENU } from './NavigationSmTypes';

const initialState = {
    showMenu: false
}

const NavigationSmReducer = (state = initialState, action) => {
    const { type } = action;

    switch(type) {
        case TOGGLE_MENU:
            return { ...state, showMenu: !state.showMenu}
        case HIDE_MENU:
            return { ...state, showMenu: false }
        default:
            return state
    }
}

export default NavigationSmReducer;