import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import MyBooksList from './components/MyBooksList';
import { loadMyBooks } from './actions/myBookActions';
import { getFilters } from '../../common/actions/filtersActions';

export class MyBooksPage extends Component {
  componentDidMount() {
    const { loadMyBooks, userId, getFilters } = this.props;
    loadMyBooks(userId);
    getFilters();
  }

  componentWillUnmount() {}

  MyBooksList = (props) => {
    return (
      <MyBooksList
        {...props}
      />
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path='/my-book' render={this.MyBooksList} />
      </Switch>
    );
  }
}

// MyBooksPage.propTypes = {
// };

const mapStateToProps = (store) => ({
  userId: store.authReducer.user.id,
});

const mapDispatchToProps = {
  loadMyBooks,
  getFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksPage);
