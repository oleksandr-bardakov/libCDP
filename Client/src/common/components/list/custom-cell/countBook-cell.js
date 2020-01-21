import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class CountBookCell extends Component {
  render() {
    const { column, item } = this.props;
    const count = item[column.Id] ? item[column.Id].length : 0;
    return (
      <div
        className={classNames('c-list__item-column ', column.className ? column.className : 'small-col')}
      >
        <span className='col-span'>
          {count}
        </span>
      </div>
    );
  }
}

CountBookCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
