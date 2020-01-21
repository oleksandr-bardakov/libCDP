import React from 'react';
import PropTypes from 'prop-types';

const getShortName = (name) => {
  const firstLetter = name[0][0];
  const lastLetter = name[0][1];
  if (name.length > 1) {
    const secondLetter = name[1][0];
    const isFullName = firstLetter + secondLetter;
    return isFullName;
  }
  const shortName = firstLetter + (lastLetter ? lastLetter : '');
  return shortName;
};

export const Badge = ({
  color,
  item,
}) => {
  const regExp = /\s{2,}/;
  const replacedWord = item.replace(regExp, ' ');
  const words = replacedWord.split(' ');
  return (
    <div
      style={{ background: color }}
      className='c-list-logo c-list-logo--badge'
    >
      {getShortName(words)}
    </div>
  );
};

Badge.propTypes = {
  item: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  color: PropTypes.string,
};
