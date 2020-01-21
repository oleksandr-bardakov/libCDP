import React, { Component, Fragment } from 'react';
import TextField from 'common/components/form-items/input/text-field';
import classNames from 'classnames';
import '../redux-form.css';

export default class renderTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stateEditMode: false,
    };
  }

  toggleEditMode = (editMode) => () => this.setState({ stateEditMode: editMode });

  onBlur = () => {
    const { input } = this.props;
    input.onBlur();
    this.toggleEditMode(false)();
  }

  render() {
    const { stateEditMode } = this.state;
    const {
      input, meta, valueToShow, isEditable = true, label, autoFocus, adornment, placeholder, maxlength, multiline, fullWidth, styles,
      formClassName, inputClassName, lableIcon, editMode, multilineField,
    } = this.props;
    const editModeTextFild = typeof editMode !== 'undefined' ? editMode : stateEditMode;
    return (
      <div className={styles.container}>
        {
          label && <label className={styles.label}>{label}{lableIcon && lableIcon()}</label>
        }
        <div className={styles.field}>
          {
            editModeTextFild && isEditable
              ? <Fragment>
                <TextField
                  formClassName={formClassName}
                  inputClassName={inputClassName}
                  placeholder={placeholder}
                  maxlength={maxlength}
                  value={input.value}
                  onChange={input.onChange}
                  adornment={adornment}
                  onBlur={this.onBlur}
                  autoFocus={autoFocus}
                  multiline={multilineField}
                  fullWidth={fullWidth}
                />
                {
                  meta.invalid && (
                    <div className={styles.fieldError}>
                      <span>{meta.error}</span>
                    </div>
                  )
                }
              </Fragment> : (
                <div className={styles.fieldView}>
                  <div
                    onClick={this.toggleEditMode(true)}
                    className={classNames(styles.fieldContent,
                      { 'field--not--editable': !isEditable },
                      { 'field--invalid': meta.invalid })}
                  >
                    {
                      multiline
                        ? <span>{valueToShow.reduce((acc, item) => {
                          acc.push(item.genre.name);
                          return acc;
                        }, []).join(', ')}</span>
                        : <span>{valueToShow}</span>
                    }
                  </div>
                  {
                    meta.invalid && (
                      <div className={styles.fieldError}>
                        <span>{meta.error}</span>
                      </div>
                    )
                  }
                </div>
              )
          }
        </div>
      </div>
    );
  }
}
