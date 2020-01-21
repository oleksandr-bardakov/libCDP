import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './select.css';

import {
  FormControl, Select as MaterialSelect, InputLabel, MenuItem,
} from '@material-ui/core';
import CustomIcon from '../../icon/Icon';

class Select extends React.Component {

  render() {
    const {
      label,
      onMouseLeave,
      value,
      formClassName,
      selectClassName,
      optionsClassName,
      inputProps,
      onChange,
      selectOptions,
      isOptionObject,
      placeholder,
      isRequired,
      disabled,
      extendedValue,
      onBlur,
      addEmployeeStyles,
    } = this.props;

    const selectValue = !!value || value === 0 ? value : 'none';

    return (
      <FormControl className={formClassName} onMouseLeave={onMouseLeave && onMouseLeave}>
        {
          label && (
            <InputLabel shrink htmlFor={inputProps.id} required={isRequired}>{label}</InputLabel>
          )
        }
        <MaterialSelect
          onBlur={onBlur}
          value={selectValue}
          id={inputProps.id}
          onChange={extendedValue && isOptionObject ? (e) => onChange({ target: e.target, item: selectOptions.find(item => item.id === e.target.value) })
            : onChange}
          inputProps={inputProps}
          disabled={disabled}
          className={classNames(selectClassName,
            {
              'placeholder--is-active': selectValue === 'none' && !disabled && !addEmployeeStyles,
            },
            {
              'placeholder--is-disabled': disabled,
            })}
        >
          {
            selectValue === 'none' && (
              <MenuItem
                value='none'
                disabled
                className={optionsClassName}
              >
                {placeholder}
              </MenuItem>
            )
          }
          {
            isOptionObject ? selectOptions && selectOptions.map((item, i) => (
              <MenuItem
                key={i}
                value={item.id}
                className={optionsClassName}
                componentname={item.name}
              >
                {item.name}
              </MenuItem>
            ))
              : (
                selectOptions && selectOptions.map((item, i) => (
                  <MenuItem key={i} value={item} className={optionsClassName}>
                    {item}
                  </MenuItem>
                )))
          }
        </MaterialSelect>
      </FormControl>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  formClassName: PropTypes.string,
  selectClassName: PropTypes.string,
  optionsClassName: PropTypes.string,
  inputProps: PropTypes.object,
  onChange: PropTypes.func,
  selectOptions: PropTypes.array,
  isOptionObject: PropTypes.bool,
  isRequired: PropTypes.bool,
  disabled: PropTypes.bool,
  extendedValue: PropTypes.bool,
};

export default Select;
