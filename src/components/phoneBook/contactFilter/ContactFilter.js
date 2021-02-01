import React from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts/contactsActions'
import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const ContactFilter = ({ filter, getFiltredContacts }) => {

    const onHandleFilter = (e) => {
        console.log(e.target.value)
        const filter = e.target.value;
        getFiltredContacts(filter);
    }

    return (
        <div>
            <h3>Find contacts by name</h3>
            <input className={s.input} tyype="text" value={filter} onChange={onHandleFilter}></input>
        </div>
    );
}

ContactFilter.propTypes = {
    filter: PropTypes.string,
    getFiltredContacts: PropTypes.func,
};

const mapStateToProps = state => ({
    // contacts: state.contacts.contactList,
    filter: state.contacts.filter,
})

const mapDispatchToProps = (dispatch) => {
    return {
        getFiltredContacts: (filter) => {
            dispatch(contactsActions.getFiltredContacts(filter));
        },
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ContactFilter);