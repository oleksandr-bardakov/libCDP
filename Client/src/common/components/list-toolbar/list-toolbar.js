import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './list-toolbar.css';
import { SearchField } from './components/search-field';
import { ButtonsGroup } from './components/buttons-group';

export class ListToolbar extends React.Component {
  constructor(props) {
    super(props);
    const { searchValue } = this.props;
    this.state = {
      searchValue: searchValue || '',
    };
  }

  static getDerivedStateFromProps(nextProps) {
    return nextProps.searchValue || nextProps.searchValue === '' ? {
      searchValue: nextProps.searchValue,
    } : {};
  }

  search = (event) => {
    const { search } = this.props;
    search(event.target.value);
  }

  clearSearch = () => {
    const { search } = this.props;
    search('');
  }

  onAddNew = () => {
    const { onAddNew, disabled } = this.props;
    !disabled && onAddNew();
  }

  render() {
    const {
      title,
      searchPlaceholder,
      showAddButton,
      showTitleText,
      blockAddButton,
      searchField = true,
      searchValue,
      customAddButton,
    } = this.props;
    return (
      <div className={classNames('toolbar-container')}>
        <div className='toolbar-container__main-part'>
          {title && (
            <div className='projects-amount'>
              <span>{title}</span>
            </div>
          )}
          <div className='toolbar'>
            <div className='left-toolbar-part'>
              {searchField && (
                <SearchField
                  searchValue={searchValue}
                  searchPlaceholder={searchPlaceholder}
                  onChange={this.search}
                  clearSearch={this.clearSearch}
                />
              )}
            </div>
            <ButtonsGroup
              showAddButton={showAddButton}
              onAddNew={this.onAddNew}
              blockAddButton={blockAddButton}
              showTitleText={showTitleText}
              customAddButton={customAddButton}
            />
          </div>
        </div>
      </div>
    );
  }
}

ListToolbar.propTypes = {
  search: PropTypes.func,
  title: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  showAddButton: PropTypes.bool,
};
