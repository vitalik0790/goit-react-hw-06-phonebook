import { combineReducers } from "redux";
import actionTypes from './contactsActionTypes'

const contactList = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.contact];

        case actionTypes.REMOVE:
            return state.filter(contact => contact.id !== payload.id)

        case actionTypes.FILTER:
            return state.filter(contact => contact.name.toLowerCase().includes(payload.filter.toLowerCase()))

        default:
            return state;
    }
};

const filter = (state = "", { type, payload }) => {
    switch (type) {
        case actionTypes.FILTER:
            return

        default:
            return state;
    }
};

export default combineReducers({
    contactList,
    filter,
})