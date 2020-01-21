import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export class GenreCell extends Component {
  render() {
    const { column, item } = this.props;
    const genre = item[column.Id].reduce((acc, item) => {
      acc.push(item.genre.name);
      return acc;
    }, []).join(', ');
    return (
      <div
        className={classNames('c-list__item-column ', column.className ? column.className : 'small-col')}
      >
        <span className='col-span'>
          {genre}
        </span>
      </div>
    );
  }
}

GenreCell.propTypes = {
  item: PropTypes.object.isRequired,
  column: PropTypes.object.isRequired,
};
