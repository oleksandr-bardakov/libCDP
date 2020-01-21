import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import history from 'utils/history';
import Button from 'common/components/redux-form/components/button.js';
import LoginTextField from 'common/components/form-items/input/login-text-field';

import { registration } from './actions/loginActions';

import './login-page.css';

export class RegistrationPage extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    isUsernameValid: false,
    isPasswordValid: false,
    isFormValid: false,
  }

  onUsernameChange = (newValue, isValid) => {
    this.setState((prevState) => ({
      name: newValue,
      isUsernameValid: isValid,
      isFormValid: isValid && prevState.IsPasswordValid,
    }));
  }

  onEmailChange = (newValue) => {
    this.setState({
      email: newValue,
    });
  }

  onPasswordChange = (newValue, isValid) => {
    const { isUsernameValid } = this.state;
    this.setState({
      password: newValue,
      IsPasswordValid: isValid,
      isFormValid: isValid && isUsernameValid,
    });
  }

  onRegButtonClick = () => {
    const { name, password, email } = this.state;
    const { registration } = this.props;
    (name && password && email) && registration(name, email, password);
  }

  clearData = (field) => {
    this.setState({
      [field]: '',
    });
  }

  goToLogin = () => {
    history.push('/login');
  }

  render() {
    const { errorRegistration } = this.props;
    const { name, password, email } = this.state;
    return (
      <div className='page-wrapper'>
        <Button
          onClick={this.goToLogin}
          className='button next confirmationdialog-button-size login-button'
          text='Login'
        />
        <div className='content-wrapper'>
          <form onSubmit={this.onRegButtonClick}>
            <h1>REGISTERATION</h1>
            <LoginTextField
              name='name'
              placeholder='Name'
              type='text'
              value={name}
              formClassName=''
              inputClassName='login-page-input'
              fullWidth
              onChange={this.onUsernameChange}
              clearValue={this.clearData}
              clearClassName='clear_login-input'
            />
            <LoginTextField
              name='email'
              placeholder='Email'
              type='text'
              value={email}
              formClassName=''
              inputClassName='login-page-input'
              fullWidth
              onChange={this.onEmailChange}
              clearValue={this.clearData}
              clearClassName='clear_login-input'
              autocomplete='off'
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
              autocomplete='off'
            />
            <div className='sign-error-container'>
              {errorRegistration ? <label>Failed to register</label> : null}
            </div>
            <Button
              onClick={this.onRegButtonClick}
              className='login-size'
              text='Registration'
            />
          </form>
        </div>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  registration: PropTypes.func,
  errorRegistration: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  errorRegistration: state.loginReducer.errorRegistration,
});

const mapDispatchToProps = {
  registration,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
