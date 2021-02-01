import { v4 as uuidv4 } from 'uuid';

const addContact = ({ name, number }) => ({
    type: "contact/add",
    payload: {
        contact: {
            id: uuidv4(),
            name,
            number,
        }
    }
})

const deleteContact = (contactId) => ({
    type: "contact/remove",
    payload: {
        contactId,
    }
})

const onHandleFilter = () => {

}