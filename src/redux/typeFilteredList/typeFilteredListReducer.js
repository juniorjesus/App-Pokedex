import { TYPE_FILTERED_LIST_LOADING, TYPE_FILTERED_LIST_SUCCESS, TYPE_FILTERED_LIST_FAILURE } from './typeFilteredListTypes';

const initialState = {
    typeFilteredList: [],
    typeFilteredListLoading: false,
    typeFilteredListError: false,
}

const typeFilteredListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case TYPE_FILTERED_LIST_LOADING:
            return { ...state, typeFilteredListLoading: true, typeFilteredListError: false }
        case TYPE_FILTERED_LIST_SUCCESS:
            return { ...state, typeFilteredListLoading: false, typeFilteredListError: false, typeFilteredList: payload }
        case TYPE_FILTERED_LIST_FAILURE:
            return { ...state, typeFilteredListLoading: false, typeFilteredListError: true }
        default:
            return state;
    }
}

export default typeFilteredListReducer;