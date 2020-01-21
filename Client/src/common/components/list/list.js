import * as React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ListItem } from './list-item';
import { ListColumns } from './list-columns';
import './list.css';

export class List extends React.Component {
  render() {
    const {
      items,
      dropdownList,
      columnsToDisplay,
      isInnerList,
      onItemClick,
      dontShowNoItemBlock,
      fixedHeader,
      config,
      dontShowHeader = false,
      emptyDataLabel,
    } = this.props;

    return (
      <div className={classNames({ 'inner-list': isInnerList && items && items.length })}>
        {!dontShowHeader && <div className={classNames({ 'fixed-wrapper_c-list__header': fixedHeader })}>
          {items && items.length
            ? <div className={classNames('c-list__header')}>
              {!!dropdownList && <div className='c-list__column tiny-col' />}
              <ListColumns
                columnsToDisplay={columnsToDisplay}
                config={config}
              />
            </div>
            : dontShowNoItemBlock ? null : <div className='list__no-item--border'>{emptyDataLabel || 'No items'}</div>}
        </div>}
        <div className={classNames({ 'fixed-wrapper_c-list__content': fixedHeader }, { 'hide_header': dontShowHeader })}>
          {
            items && items !== [] && items.map((item, i) => {
              return (
                <ListItem
                  key={JSON.stringify(item)}
                  item={item}
                  columnsToDisplay={columnsToDisplay}
                  idItem={i}
                  onItemClick={onItemClick}
                  config={config}
                />
              );
            })
          }
        </div>
      </div>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  columnsToDisplay: PropTypes.array,
  dropdownList: PropTypes.object,
  isInnerList: PropTypes.bool,
  onItemClick: PropTypes.func,
  emptyDataLabel: PropTypes.string,
};
