import React, { Component } from 'react';
import { Icon } from 'office-ui-fabric-react';
import { mergeStyles, registerIcons } from 'office-ui-fabric-react/lib-commonjs/Styling';
import * as PropTypes from 'prop-types';

registerIcons({
  icons: {
    'cross': (
      <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.54'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z'
          fill='black'
        />
      </svg>
    ),
    'plus-blue': (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z' fill='rgb(57, 85, 242)' />
      </svg>
    ),
    'search-magnifier': (
      <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5
          3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14
          14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99
          5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z'
          fill='#dfdfdf'
        />
      </svg>
    ),
    'delete-searchbox': (<svg
      className='clear-search'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19
        17.59L13.41 12L19 6.41Z'
        fill='#dfdfdf'
      />
    </svg>
    ),
    'confirmation-dialog-cross': (
      <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          opacity='0.54'
          fillRule='evenodd'
          clipRule='evenodd'
          d='M14 1.4L12.6 0L7 5.6L1.4 0L0 1.4L5.6 7L0 12.6L1.4 14L7 8.4L12.6 14L14 12.6L8.4 7L14 1.4Z'
          fill='black'
        />
      </svg>
    ),
    'confirmation-dialog-question': (
      <svg
        width='42'
        height='42'
        viewBox='0 0 42 42'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20.9998 0.166504C9.49984 0.166504 0.166504 9.49984 0.166504 20.9998C0.166504 32.4998 9.49984 41.8332 20.9998
          41.8332C32.4998 41.8332 41.8332 32.4998 41.8332 20.9998C41.8332 9.49984 32.4998 0.166504 20.9998 0.166504ZM23.0832
          35.5832H18.9165V31.4165H23.0832V35.5832ZM27.3957 19.4373L25.5207 21.354C24.0207 22.8748 23.0832 24.1248 23.0832
          27.2498H18.9165V26.2082C18.9165 23.9165 19.854 21.8332 21.354 20.3123L23.9373 17.6873C24.7082 16.9373 25.1665
          15.8957 25.1665 14.7498C25.1665 12.4582 23.2915 10.5832 20.9998 10.5832C18.7082 10.5832 16.8332 12.4582 16.8332
          14.7498H12.6665C12.6665 10.1457 16.3957 6.4165 20.9998 6.4165C25.604 6.4165 29.3332 10.1457 29.3332 14.7498C29.3332
          16.5832 28.5832 18.2498 27.3957 19.4373Z'
          fill='#D7D7D7'
        />
      </svg>
    ),
  },
});

class CustomIcon extends Component {
  render() {
    const {
      iconName, style, className, onClick, id, name, title,
    } = this.props;
    return (
      <Icon
        id={id}
        iconName={iconName}
        style={style}
        className={mergeStyles(className, { display: 'flex' })}
        onClick={onClick}
        name={name}
        title={title}
      />
    );
  }
}

CustomIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  style: PropTypes.object,
  className: PropTypes.string,
};

export default CustomIcon;
