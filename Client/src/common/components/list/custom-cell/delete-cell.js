import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from 'common/components/redux-form/components/button';

export class DeleteCell extends Component {
  delete = () => {
    const {
      item, column, config,
    } = this.props;
    config[column.Id].valueSetter(item.id);
  }

  render() {
    const {
      item,
      column,
    } = this.props;
    return (
      <div className={classNames('c-list__item-column', column.className ? column.className : 'small-col')}>
        {item[column.Id] === 1 ? <span className='col-span'>
          Deleted
        </span>
          : <Button
            onClick={this.delete}
            className='button next cell-delete-button-size'
            text='Delete user'
          />}
      </div>
    );
  }
}

DeleteCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
