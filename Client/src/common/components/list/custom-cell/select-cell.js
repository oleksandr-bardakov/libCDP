import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '../../form-items/select/select';

export class SelectCell extends Component {
  onSelectChange = (e) => {
    const {
      item, column, config,
    } = this.props;
    const editItem = {
      ...item,
      [column.Id]: e.target.value,
    };
    config[column.Id].valueSetter(editItem);
  }

  render() {
    const {
      item,
      column,
      config,
    } = this.props;
    const selectValue = item[column.Id].id;
    return (
      <div className={classNames('c-list__item-column', column.className ? column.className : 'small-col')}>
        <Select
          formClassName='skills-level-select_cell-list'
          value={selectValue}
          selectOptions={config[column.Id].options}
          isOptionObject
          inputProps={{
            name: item.Id,
            id: item.Id,
          }}
          showClear={false}
          onChange={this.onSelectChange}
        />
      </div>
    );
  }
}

SelectCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
