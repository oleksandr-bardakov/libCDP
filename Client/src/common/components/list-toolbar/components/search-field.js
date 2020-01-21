import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CustomIcon from '../../icon/Icon';

export class SearchField extends Component {
  render() {
    const {
      searchPlaceholder,
      searchValue,
      onChange,
      clearSearch,
    } = this.props;
    return (
      <div className='search-cont'>
        <input
          className='search-field'
          type='text'
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={onChange}
        />
        {
          searchValue === '' ? (
            <CustomIcon className='list-tool-bar__input-svg--position' iconName='search-magnifier' />
          ) : (
            <CustomIcon className='list-tool-bar__input-svg--position' iconName='delete-searchbox' onClick={clearSearch} />
          )
        }
      </div>
    );
  }
}

SearchField.propTypes = {
  searchValue: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired,
};
