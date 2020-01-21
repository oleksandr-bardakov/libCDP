import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import UsersList from './components/UsersList';
import PaymentsList from './components/PaymentsList';
import TopBooks from './components/TopBooks';
import { loadUsers, loadPayments, loadTopBooks } from './actions/adminActions';

export class AdminPage extends Component {
  componentDidMount() {
    const { loadUsers, loadPayments, loadTopBooks } = this.props;
    loadUsers();
    loadPayments();
    loadTopBooks();
  }

  componentWillUnmount() { }

  UsersList = (props) => {
    return (
      <UsersList
        {...props}
      />
    );
  };

  PaymentsList = (props) => {
    return (
      <PaymentsList
        {...props}
      />
    );
  };

  TopBooks = (props) => {
    return (
      <TopBooks
        {...props}
      />
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path='/admin/users' render={this.UsersList} />
        <Route exact path='/admin/payment' render={this.PaymentsList} />
        <Route exact path='/admin/top-books' render={this.TopBooks} />
      </Switch>
    );
  }
}

// AdminPage.propTypes = {
// };

const mapStateToProps = (store) => ({
  userId: store.authReducer.user.id,
});

const mapDispatchToProps = {
  loadUsers,
  loadPayments,
  loadTopBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
