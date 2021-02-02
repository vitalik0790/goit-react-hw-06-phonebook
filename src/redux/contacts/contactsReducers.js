import { combineReducers } from "redux";
import actionTypes from './contactsActionTypes'

const contactList = (state = [], { type, payload }) => {
    switch (type) {
        case actionTypes.ADD:
            return [...state, payload.contact];

        case actionTypes.REMOVE:
            return state.filter(contact => contact.id !== payload.id)

        default:
            return state;
    }
};

const filter = (state = "", { type, payload }) => {
    switch (type) {
        case actionTypes.VALUE:
            return payload.filter;

        default:
            return state;
    }
};

export default combineReducers({
    contactList,
    filter,
})