import { createStore, combineReducers } from 'redux';
import contactsReducers from "./contacts/contactsReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
    contacts: contactsReducers,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;


