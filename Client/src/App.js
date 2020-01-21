import React, { Component, Fragment } from 'react';
import 'babel-polyfill';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Router, Route, Switch, Redirect,
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import history from 'utils/history';
import MomentUtils from '@date-io/moment';
import Scrollbars from 'react-custom-scrollbars';

import HeaderComponent from 'common/components/header/header';
import LoginPage from 'pages/login/login-page';
import RegistrationPage from 'pages/login/registeration-page';
import MyBooksPage from 'pages/my-books/MyBooksPage';
import LibraryPage from 'pages/library/LibraryPage';
import AdminPage from 'pages/admin/AdminPage';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { createMuiTheme } from '@material-ui/core/styles';
import { Preloader } from 'common/components/preloader/preloader.js';

import { logout } from 'common/actions/authActions';
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: 'rgb(57, 85, 242)',
      main: 'rgb(57, 85, 242)',
      dark: 'rgb(57, 85, 242)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

class AppRoute extends Component {
  render() {
    const {
      authToken,
      loadingReducer,
      isAdmin,
    } = this.props;
    const rights = !!authToken;
    return (
      <Router history={history}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider theme={theme}>
            <div className='app'>
              {
                loadingReducer.isLoading ? <Preloader /> : null
              }
              {
                rights
                  ? (<Switch>
                    <Route path='/login' component={LoginPage} />
                    <Route
                      path='/'
                      render={() => (
                        <Fragment>
                          <Scrollbars
                            autoHide
                            autoHideTimeout={300}
                            hideTracksWhenNotNeeded
                          >
                            <div className='page'>
                              <div className='page-content'>
                                <HeaderComponent />
                                <Switch>
                                  <Route path='/my-book' component={MyBooksPage} />
                                  <Route path='/library' component={LibraryPage} />
                                  {
                                    isAdmin ? (
                                      <Route path='/admin' component={AdminPage} />
                                    ) : null
                                  }
                                  <Redirect to='/my-book' />
                                </Switch>
                              </div>
                            </div>
                          </Scrollbars>
                        </Fragment>)}
                    />
                  </Switch>)
                  : (<Switch>
                    <Route exact path='/login' component={LoginPage} />
                    <Route path='/registration' component={RegistrationPage} />
                    <Redirect to='/login' />
                  </Switch>)
              }
            </div>
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>
      </Router>
    );
  }
}

AppRoute.propTypes = {
  authToken: PropTypes.string,
  isAdmin: PropTypes.bool,
};

export default connect(store => ({
  authToken: store.authReducer.authToken,
  loadingReducer: store.loadingReducer,
  isAdmin: store.authReducer.user && store.authReducer.user.role.name === 'admin' ? true : false,
}), {
  logout,
})(AppRoute);
