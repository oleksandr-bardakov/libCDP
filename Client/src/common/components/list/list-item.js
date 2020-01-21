/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './list-item.css';

export class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderListCell = (column, item) => {
    const { Id, isArray } = column;
    if (item[Id] && isArray) { return item[Id].map((item) => item.name || item).join(', '); }
    return !!item[Id] ? <span title={item[Id]}>{item[Id]}</span> : '———';
  }

  renderCustomCell = (CustomCell, column) => {
    const { item } = this.props;
    return <CustomCell {...this.props} column={column} key={(item.Id || JSON.stringify(item)) + Math.random()} />;
  }

  onItemClick = () => {
    const { onItemClick, item } = this.props;
    onItemClick(item);
  }

  render() {
    const {
      item,
      columnsToDisplay,
      onItemClick,
      config,
    } = this.props;

    return (
      <>
        <div
          className='c-list__item-cont'
          onClick={onItemClick && this.onItemClick}
          id={item.id && item.id}
        >
          {
            columnsToDisplay.map((column) => {
              return column.isSelected || typeof column.isSelected === 'undefined' ? config && config[column.Id] ? (
                this.renderCustomCell(config[column.Id].cell, column)
              ) : (<div
                key={column.Id}
                className={classNames(
                  'c-list__item-column',
                  column.className ? column.className : 'small-col',
                  { 'array_column': column.isArray && this.renderListCell(column, item).length >= 20 },
                )}
              >
                <span
                  className='col-span'
                  style={column.Id !== 'Status' && { WebkitBoxOrient: 'vertical' }}
                  title={this.renderListCell(column, item)}
                >
                  {
                    this.renderListCell(column, item)
                  }
                </span>
              </div>) : null;
            })
          }
        </div>
      </>
    );
  }
}

ListItem.propTypes = {
  item: PropTypes.object,
  columnsToDisplay: PropTypes.array,
  onItemClick: PropTypes.func,
};
