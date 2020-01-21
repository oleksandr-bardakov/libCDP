import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'utils/history';
import Button from 'common/components/redux-form/components/button';
import LoginTextField from 'common/components/form-items/input/login-text-field';

import { signinRequest } from './actions/loginActions';

import './login-page.css';

export class LoginPage extends React.Component {
  state = {
    username: '',
    password: '',
    isUsernameValid: false,
    isPasswordValid: false,
    isFormValid: false,
  }

  onUsernameChange = (newValue, isValid) => {
    this.setState((prevState) => ({
      username: newValue,
      isUsernameValid: isValid,
      isFormValid: isValid && prevState.IsPasswordValid,
    }));
  }

  onPasswordChange = (newValue, isValid) => {
    const { isUsernameValid } = this.state;
    this.setState({
      password: newValue,
      IsPasswordValid: isValid,
      isFormValid: isValid && isUsernameValid,
    });
  }

  onLoginButtonClick = () => {
    const { username, password } = this.state;
    const { signinRequest } = this.props;
    (username && password) && signinRequest(username, password);
  }

  clearData = (field) => {
    this.setState({
      [field]: '',
    });
  }

  goToRegistration = () => {
    history.push('/registration');
  }

  render() {
    const { isLoading, error } = this.props;
    const { username, password } = this.state;
    return (
      <div className='page-wrapper'>
        <Button
          onClick={this.goToRegistration}
          className='button next confirmationdialog-button-size login-button'
          text='Registration'
        />
        <div className='content-wrapper'>
          <form onSubmit={this.OnLoginButtonClick}>
            <h1>Sign In</h1>
            <LoginTextField
              name='username'
              placeholder='Name'
              type='text'
              value={username}
              formClassName=''
              inputClassName='login-page-input'
              fullWidth
              onChange={this.onUsernameChange}
              clearValue={this.clearData}
              clearClassName='clear_login-input'
            />
            <LoginTextField
              name='password'
              placeholder='Password'
              type='password'
              value={password}
              formClassName=''
              inputClassName='login-page-input'
              fullWidth
              onChange={this.onPasswordChange}
              clearValue={this.clearData}
              clearClassName='clear_login-input'
            />
            <div className='sign-error-container'>
              {error ? <label>Login or password is incorrect</label> : null}
            </div>
            <Button
              onClick={this.onLoginButtonClick}
              className='login-size'
              text={isLoading ? '' : 'Login'}
            />
          </form>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  isLoading: PropTypes.bool,
  signinRequest: PropTypes.func,
  error: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.authReducer.isLoading,
  error: state.loginReducer.error,
});

const mapDispatchToProps = {
  signinRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
