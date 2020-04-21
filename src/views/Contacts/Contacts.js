import React from 'react';
import ContactEditer from '../../components/ContactEditer';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Spiner from '../../components/Spiner';
import Notification from '../../components/Notification';
import { CSSTransition } from 'react-transition-group';
import './Contact.css';

export default function Contacts({
  errorContacts,
  isLoadingContacts,
  errorContactExisted,
  contacts,
  onHideAlert,
}) {
  let showAlert = errorContactExisted > 0;
  return (
    <div className="contactsContainer">
      <CSSTransition
        in={showAlert}
        timeout={500}
        classNames="notification-fade"
        onEnter={() => setTimeout(onHideAlert, 2000)}
        unmountOnExit
      >
        <Notification message={`${errorContactExisted} is already exist!`} />
      </CSSTransition>

      <ContactEditer />

      <CSSTransition
        in={contacts.length > 1}
        timeout={250}
        classNames="filter-fade"
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      <div className="spiner"> {isLoadingContacts && <Spiner />}</div>

      {errorContacts && (
        <Notification
          message={`Whoops, something went wrong: ${errorContacts}`}
        />
      )}

      <ContactList />
    </div>
  );
}
