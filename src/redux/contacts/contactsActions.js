import { v4 as uuidv4 } from 'uuid';
import actionTypes from "./contactsActionTypes";

const addContact = ({ name, number }) => ({
    type: actionTypes.ADD,
    payload: {
        contact: {
            id: uuidv4(),
            name,
            number,
        }
    }
})

const deleteContact = (id) => ({
    type: actionTypes.REMOVE,
    payload: {
        id,
    }
})

const onHandleFilter = (filter) => ({
    type: actionTypes.VALUE,
    payload: {
        filter,
    }
})


export default {
    addContact,
    deleteContact,
    onHandleFilter,
}