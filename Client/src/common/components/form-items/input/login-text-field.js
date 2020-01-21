import * as React from 'react';
import PropTypes from 'prop-types';
import TextFieldComponent from './text-field';

class LoginTextField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: '',
      isError: false,
      inFocus: false,
      needToMoveCursorToEnd: true,
    };
  }

  componentDidMount() {
    const { autoFocus } = this.props;
    if (this.inputElement) {
      if (autoFocus) {
        this.inputElement && this.inputElement.focus();
      }
      if (this.inFocus && this.needToMoveCursorToEnd) {
        this.inputElement.selectionStart = this.inputElement.value.length;
        if (this.inputElement instanceof HTMLInputElement) {
          this.inputElement.scrollLeft = this.inputElement.scrollWidth;
        }
        this.needToMoveCursorToEnd = false;
      }
      this.inputElement && this.inputElement.addEventListener('keydown', this.onKeyPress, false);
    }
  }

  componentWillUnmount() {
    this.inputElement && this.inputElement.removeEventListener('keydown', this.onKeyPress, false);
  }

  forceUpdateValue = (value) => {
    this.onInputValueChange(value);
  }

  focus = () => {
    this.inputElement && this.inputElement.focus();
  }

  blur = () => {
    this.inputElement && this.inputElement.blur();
  }

  onInputValueChange = (e) => {
    const { onChange } = this.props;
    onChange(e.target.value, true);
  }

  onFieldFocus = (event) => {
    const { onFocus } = this.props;
    this.setState({ inFocus: true });
    onFocus && onFocus(event);
  }

  onFieldBlur = (event) => {
    const { onBlur } = this.props;
    this.setState({ inFocus: false });
    onBlur && onBlur(event);
  }

  render() {
    const {
      name,
      type,
      value,
      label,
      placeholder,
      fullWidth,
      multiline,
      formClassName,
      inputClassName,
      clearClassName,
      clearValue,
    } = this.props;

    return (
      <TextFieldComponent
        name={name}
        value={value ? value : ''}
        label={label}
        placeholder={placeholder}
        type={type}
        fullWidth={fullWidth}
        multiline={multiline}
        formClassName={formClassName}
        inputClassName={inputClassName}
        onChange={this.onInputValueChange}
        onFocus={this.onFieldFocus}
        onBlur={this.onFieldBlur}
        clearValue={clearValue}
        clearClassName={clearClassName}
      />
    );
  }
}

LoginTextField.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  formClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
};

export default LoginTextField;
