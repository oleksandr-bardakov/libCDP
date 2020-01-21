import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import LibraryList from './components/LibraryList';
import { loadLibraryBooks } from './actions/libraryActions';

export class LibraryPage extends Component {
  componentDidMount() {
    const { loadLibraryBooks } = this.props;
    loadLibraryBooks();
  }

  componentWillUnmount() {}

  LibraryList = (props) => {
    return (
      <LibraryList
        {...props}
      />
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path='/library' render={this.LibraryList} />
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
  loadLibraryBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryPage);
