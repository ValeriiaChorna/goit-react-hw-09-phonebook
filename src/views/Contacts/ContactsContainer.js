import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../../redux/contacts/contactOperations';
import contactsSelectors from '../../redux/contacts/contactsSelectors';
import { authSelectors } from '../../redux/auth';
import Contacts from './Contacts';

class ContactsContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return <Contacts {...this.props} />;
  }
}
const MapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  errorContacts: contactsSelectors.getError(state),
  contacts: contactsSelectors.getContacts(state),
  errorContactExisted: contactsSelectors.getErrorContactExisted(state),
  isAuthenticated: authSelectors.isAuthenticated(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
  onHideAlert: contactOperations.clearDoesExistContact,
};

export default connect(MapStateToProps, mapDispatchToProps)(ContactsContainer);
