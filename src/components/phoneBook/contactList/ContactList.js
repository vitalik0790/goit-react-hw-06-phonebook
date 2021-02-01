import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const ContactList = ({ contacts, deleteContact }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <TransitionGroup component='ul' className={s.list}>
                {contacts.map(contact => {
                    return (
                        <CSSTransition
                            key={contact.id}
                            timeout={250}
                            classNames={s}>
                            <li className={s.listItem}>
                                <span className={s.name}>{contact.name}</span>: <span>{contact.number}</span>
                                <button className={s.button} type="button" data-id={contact.id} onClick={deleteContact}>Delete</button>
                            </li>
                        </CSSTransition>)
                })}
            </TransitionGroup>
        </div>
    );
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            number: PropTypes.string,
            id: PropTypes.string,
        }),
    ),
    onDeleteContact: PropTypes.func,
};

export default ContactList;