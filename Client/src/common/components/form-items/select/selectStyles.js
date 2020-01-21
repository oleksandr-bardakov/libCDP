import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';

const styles = () => ({
  root: {
    background: 'white',
    border: '1px solid #DFDFDF',
    boxSizing: 'border-box',
  },
  select: {
    paddingLeft: '14px',
    fontSize: '14px',
    color: 'rgba(75, 75, 75, 0.54)',
  },
});

const StyledSelect = (props) => (
  <Select {...props} />
);

export default withStyles(styles)(StyledSelect);
