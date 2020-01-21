import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CustomIcon from '../../icon/Icon';

export class ButtonsGroup extends Component {
  render() {
    const {
      showAddButton,
      onAddNew,
      blockAddButton,
      showTitleText,
      customAddButton,
    } = this.props;
    return (
      <div className='right-toolbar-part'>
        {showAddButton && (
          <div
            className={classNames(blockAddButton ? 'toolbar-button-disabled btn-disabled' : 'toolbar-button')}
            title={blockAddButton && (showTitleText ? showTitleText : null)}
            onClick={!blockAddButton && onAddNew}
          >
            <CustomIcon iconName='plus-blue' />
            <span>{customAddButton ? customAddButton : 'Add New'}</span>
          </div>
        )}
      </div>
    );
  }
}

ButtonsGroup.propTypes = {
  showAddButton: PropTypes.bool,
  blockAddButton: PropTypes.bool,
  onAddNew: PropTypes.func,
  showTitleText: PropTypes.string,
  customAddButton: PropTypes.string,
};
