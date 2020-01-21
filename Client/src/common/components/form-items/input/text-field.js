import * as React from 'react';
import PropTypes from 'prop-types';

import { FormControl, TextField as MaterialTextField, InputAdornment } from '@material-ui/core';

import './text-field.css';
import CustomIcon from '../../icon/Icon';

class TextField extends React.Component {
  clearValue = () => {
    const { clearValue, name, id } = this.props;

    clearValue(name, id);
  }

  render() {
    const {
      id,
      autoFocus = false,
      showClear = false,
      clearClassName = 'clear-svg',
      name,
      label,
      formClassName,
      inputClassName,
      type,
      value,
      placeholder,
      fullWidth,
      multiline,
      onChange,
      onFocus,
      onBlur,
      isRequired,
      adornment,
      disabled,
      helperText,
      error,
      maxlength,
    } = this.props;

    return (
      <FormControl
        className={formClassName || ''}
        fullWidth={fullWidth || false}
      >
        <MaterialTextField
          id={id}
          autoFocus={autoFocus}
          name={name}
          label={label || ''}
          className={inputClassName || ''}
          type={type}
          value={value || ''}
          placeholder={placeholder || ''}
          multiline={multiline || false}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          InputLabelProps={{ shrink: true }}
          required={isRequired}
          error={error}
          InputProps={{
            startAdornment: adornment && <InputAdornment position='start'>{adornment}</InputAdornment>,
            inputProps: {
              maxLength: maxlength,
            },
          }}
          disabled={disabled}
          title={helperText ? helperText : ''}
        />
        {
          showClear && value && !multiline && !disabled ? (
            <CustomIcon iconName='cross' className={clearClassName} onClick={this.clearValue} />
          ) : null
        }
      </FormControl>
    );
  }
}

TextField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  formClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  fullWidth: PropTypes.bool,
  multiline: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  adornment: PropTypes.string,
  helperText: PropTypes.string,
  clearValue: PropTypes.func,
  maxlength: PropTypes.string,
};

export default TextField;
