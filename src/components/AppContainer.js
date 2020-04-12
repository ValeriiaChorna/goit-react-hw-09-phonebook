import React, { Component } from 'react';
import { connect } from 'react-redux';
import contactOperations from '../redux/contacts/contactOperations';
import contactsSelectors from '../redux/contacts/contactsSelectors';
import ThemeContext from '../context/ThemeContext';
import App from './App';

class AppContainer extends Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }

  render() {
    return (
      <ThemeContext>
        <App {...this.props} />
      </ThemeContext>
    );
  }
}
const MapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
  errorContacts: contactsSelectors.getError(state),
  contacts: contactsSelectors.getContacts(state),
  errorContactExisted: contactsSelectors.getErrorContactExisted(state),
});

const mapDispatchToProps = {
  onFetchContacts: contactOperations.fetchContacts,
  onHideAlert: contactOperations.clearDoesExistContact,
};

export default connect(MapStateToProps, mapDispatchToProps)(AppContainer);
