import React from 'react';
import MultiSuggestBox from 'common/components/form-items/multi-value-suggestbox/multi-value-suggestbox';
import '../redux-form.css';
import { getDataForMultiBox } from 'utils/getDataForMultiBox';

export default class renderMultiSuggestBox extends React.Component {
  onChange = () => value => {
    const {
      input, maxLenght,
    } = this.props;
    if (!!maxLenght) {
      if ((value && value.length) <= maxLenght) {
        input.onChange(value);
      }
    } else {
      input.onChange(value);
    }
  }

  render() {
    const {
      meta, options, label, placeholder, isMulti, blockAddNewItem, values, autoFocus, styles,
      additionalClassName, anotherIndetificator, handleInputChange, handleValue,
      isDisabled, customMassageValidation, isLoading, isClearable,
    } = this.props;
    return (
      <div className={styles.container}>
        {
          label && <label className={styles.label}>{label}</label>
        }
        <div className={`multi-box-wrapper ${styles.field}`} onMouseOver={this.ololo}>
          <MultiSuggestBox
            placeholder={placeholder}
            className={additionalClassName}
            onAdd={this.onChange()}
            options={getDataForMultiBox(options, anotherIndetificator)}
            suggesValue={values}
            isMulti={isMulti}
            blockAddNewItem={blockAddNewItem}
            autoFocus={autoFocus}
            handleInputChange={handleInputChange}
            handleValue={handleValue}
            isDisabled={isDisabled}
            isLoading={isLoading}
            isClearable={isClearable}
          />
          {
            meta.invalid && (
              <div className={styles.fieldError}>
                <span>{meta.error}</span>
              </div>
            )
          }
          {
            customMassageValidation && (
              <div className={styles.fieldError}>
                <span>{customMassageValidation}</span>
              </div>
            )
          }
        </div>
      </div>
    );
  }
}
