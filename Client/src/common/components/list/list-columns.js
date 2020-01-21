import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class ListColumns extends Component {
  render() {
    const {
      columnsToDisplay,
    } = this.props;
    return (
      columnsToDisplay.map((column) => {
        return (
          <div
            key={column.Id}
            className={classNames(
              'c-list__header-col',
              column.className ? column.className : 'small-col',
              column.hasBorder,
            )}
          >
            <div className={`c-list__header-name ${column.shiftName ? 'shift_up-header' : ''}`}>
              <span>{column.Name}</span>
            </div>
          </div>);
      })
    );
  }
}

ListColumns.propTypes = {
  columnsToDisplay: PropTypes.array.isRequired,
};
