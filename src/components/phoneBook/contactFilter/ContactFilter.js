import React from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts/contactsActions'
import PropTypes from 'prop-types';
import s from './ContactFilter.module.css';

const ContactFilter = ({ filter, onHandleFilter }) => {
    return (
        <div>
            <h3>Find contacts by name</h3>
            <input className={s.input} tyype="text" value={filter} onChange={onHandleFilter}></input>
        </div>
    );
}

ContactFilter.propTypes = {
    filter: PropTypes.string,
    onHandleFilter: PropTypes.func,
};

export default ContactFilter;