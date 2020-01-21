import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CustomIcon from '../icon/Icon';

import './confirmation-dialog.css';

export class ConfirmationDialog extends Component {
  render() {
    const {
      dialogHeader,
      diaalogTitle,
      closeButtonTitle,
      confirmButtonTitle,
      closeDialog, actionData, confirmDialog,
    } = this.props;
    const isNeedAddMarginTop = diaalogTitle.startsWith('Are');
    return (
      <Dialog
        open
        onClose={closeDialog}
        aria-labelledby='responsive-dialog-title'
        className='dialog-width'
      >
        <DialogTitle id='responsive-dialog-title'>
          <span className='show-dialog-title'>{dialogHeader} </span>
          <span className='dialog-cancel-svg' onClick={closeDialog}>
            <CustomIcon iconName='confirmation-dialog-cross' />
          </span>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <CustomIcon iconName='confirmation-dialog-question' className='confirmation-dialog-question' />
            <span className={`show-dialog-content ${isNeedAddMarginTop ? 'margin-top_dialog' : ''}`}> {diaalogTitle} </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            className='button cancel confirmationdialog-button-size'
            onClick={closeDialog}
          >
            <span className='confirmationdialog-button-title'>{closeButtonTitle}</span>
          </div>
          {confirmDialog && <div
            className='button next confirmationdialog-button-size'
            onClick={() => confirmDialog(actionData)}
          >
            <span className='confirmationdialog-button-title'>{confirmButtonTitle}</span>
          </div>}
        </DialogActions>
      </Dialog>
    );
  }
}

ConfirmationDialog.propTypes = {
  dialogHeader: PropTypes.string,
  diaalogTitle: PropTypes.string,
  closeButtonTitle: PropTypes.string,
  confirmButtonTitle: PropTypes.string,
  actionData: PropTypes.object,
  closeDialog: PropTypes.func,
  confirmDialog: PropTypes.func,
};
