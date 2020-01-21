import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import {
  Field, reduxForm, initialize,
} from 'redux-form';
import { required } from 'utils/redux-form-validators.js';
import renderTextField from 'common/components/redux-form/components/text-field';
import Button from 'common/components/redux-form/components/button';
import CustomIcon from 'common/components/icon/Icon';
import { formHandleSubmit } from 'utils/formHandleSubmit';
import { ConfirmationDialog } from 'common/components/modal-dialogs/ConfirmationDialog';
import renderMultiSuggestBox from 'common/components/redux-form/components/multi-suggest';

import book from './books.jpg';
import './book-details.css';

const defaultStyles = {
  container: 'redux-form__field-container standart-container field-book__content-block',
  label: 'redux-form__label',
  field: 'field',
  fieldContent: 'field__view-content standart-content-padding',
  fieldError: 'field__error-container',
  fieldView: 'field__view-container',
};

export class BookDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTakeDialog: false,
    };
  }

  componentDidMount() {
    const { initialize, bookDetails } = this.props;
    initialize(bookDetails);
  }

  componentDidUpdate(prevProps) {
    const { initialize, bookDetails } = this.props;
    if (prevProps.bookDetails !== bookDetails) {
      initialize(bookDetails);
    }
  }

  toogleDialog = () => {
    const { showTakeDialog } = this.state;
    this.setState({
      showTakeDialog: !showTakeDialog,
    });
  }

  takeBook = () => {
    const { takeBook, bookDetails, closeDialog } = this.props;
    takeBook(bookDetails);
    closeDialog();
    this.toogleDialog();
  }

  returnBook = () => {
    const { returnBook, bookDetails, closeDialog } = this.props;
    returnBook(bookDetails);
    closeDialog();
  }

  updateBook = () => {
    const {
      updateBook, valid, formData, closeDialog,
    } = this.props;
    if (valid) {
      updateBook(formData);
      closeDialog();
    }
  }

  addNewBook = () => {
    const {
      addNewBook, valid, formData, closeDialog,
    } = this.props;
    if (valid) {
      addNewBook(formData);
      closeDialog();
    }
  }

  deleteBook = () => {
    const { deleteBook, bookDetails, closeDialog } = this.props;
    deleteBook(bookDetails.id);
    closeDialog();
  }

  render() {
    const {
      closeDialog, editMode, valid, formData, bookDetails,
      takeBook, returnBook, isAddNewBook, ganres,
    } = this.props;
    const { showTakeDialog } = this.state;
    return (
      <Dialog
        open
        onClose={closeDialog}
        aria-labelledby='responsive-dialog-title'
        className='book-details__modal-width'
      >
        <DialogTitle id='responsive-dialog-title'>
          <span className='show-dialog-title'>{!editMode ? 'Book Details' : (isAddNewBook ? 'Add Book' : 'Edit book')}</span>
          <span className='dialog-cancel-svg' onClick={closeDialog}>
            <CustomIcon iconName='confirmation-dialog-cross' />
          </span>
        </DialogTitle>
        <DialogContent>
          <div className='book-details-block'>
            <div className='book-details-info'>
              <img src={book} alt='image book' width='200px' heigth='200px' />
              {!!returnBook && <Button
                onClick={this.returnBook}
                className='button next confirmationdialog-button-size'
                text='Return book'
              />}
              {(!!takeBook && !isAddNewBook && !!bookDetails.amount) && <Button
                onClick={this.toogleDialog}
                className='button next confirmationdialog-button-size'
                text='Take book'
              />}
            </div>
            <div className='book-details-form'>
              <form className='redux-form redux-form-book-details-width' onSubmit={formHandleSubmit}>
                <div className='redux-form__book-row--field-book redux-form__book-row--field-book-width'>
                  <Field
                    name='name'
                    component={renderTextField}
                    label='Book Name'
                    valueToShow={formData && formData.name}
                    placeholder='Change Name'
                    validate={required}
                    maxlength='255'
                    styles={{
                      ...defaultStyles,
                    }}
                    formClassName='step__form svg-calendar-add-info'
                    inputClassName='text__field'
                    editMode={editMode}
                  />
                  <Field
                    name='cost'
                    component={renderTextField}
                    label='Cost'
                    valueToShow={formData && formData.cost}
                    placeholder='Change cost'
                    validate={required}
                    maxlength='11'
                    styles={{
                      ...defaultStyles,
                    }}
                    formClassName='step__form svg-calendar-add-info'
                    inputClassName='text__field'
                    editMode={editMode}
                  />
                </div>
                <div className='redux-form__book-row--field-book redux-form__book-row--field-book-width'>
                  <Field
                    name='autor'
                    component={renderTextField}
                    label='Autor'
                    valueToShow={formData && formData.autor}
                    placeholder='Change Autor'
                    validate={required}
                    maxlength='255'
                    styles={{
                      ...defaultStyles,
                    }}
                    formClassName='step__form svg-calendar-add-info'
                    inputClassName='text__field'
                    editMode={editMode}
                  />
                  <Field
                    name='year'
                    component={renderTextField}
                    label='Year'
                    valueToShow={formData && formData.year}
                    placeholder='Change Year'
                    validate={required}
                    maxlength='255'
                    styles={{
                      ...defaultStyles,
                    }}
                    formClassName='step__form svg-calendar-add-info'
                    inputClassName='text__field'
                    editMode={editMode}
                  />
                </div>
                <div className='redux-form__book-row--field-book redux-form__book-row--field-book-width'>
                  {isAddNewBook ? <Field
                    name='genres_to_books'
                    component={renderMultiSuggestBox}
                    options={ganres}
                    validate={required}
                    isMulti
                    placeholder='Add genres'
                    label='Genres'
                    inputProps={{ id: 'genres' }}
                    maxLenght={4}
                    styles={{
                      ...defaultStyles,
                    }}
                    handleValue={formData && formData.genres_to_books}
                  />
                    : <Field
                      name='genres_to_books'
                      component={renderTextField}
                      label='Genres'
                      valueToShow={formData && formData.genres_to_books}
                      validate={required}
                      styles={{
                        ...defaultStyles,
                      }}
                      formClassName='step__form svg-calendar-add-info'
                      inputClassName='text__field'
                      multiline
                      editMode={false}
                    />}
                  <Field
                    name='amount'
                    component={renderTextField}
                    label='Amount'
                    valueToShow={formData && formData.cost}
                    validate={required}
                    maxlength='10'
                    placeholder='Change amount'
                    styles={{
                      ...defaultStyles,
                    }}
                    formClassName='step__form svg-calendar-add-info'
                    inputClassName='text__field'
                    editMode={editMode}
                  />
                </div>
                <div className='redux-form__book-row'>
                  <Field
                    name='description'
                    component={renderTextField}
                    label='Description'
                    placeholder='Change Description'
                    valueToShow={formData && formData.description}
                    validate={required}
                    multilineField
                    maxlength='1000'
                    fullWidth
                    editMode={editMode}
                    styles={{
                      ...defaultStyles,
                      container: 'redux-form__field-container flexible-container genre-container',
                      field: 'full-width-field height-100pc',
                      fieldContent: 'standart-content-padding align-center height-100pc',
                      fieldView: 'field__view-container height-100pc modal__book-details--big-block-ganres',
                    }}
                    formClassName='step__form--book-big-block svg-calendar-add-info'
                    inputClassName='modal__book-details--textarea-book'
                  />
                </div>
              </form>
            </div>
            {showTakeDialog && <ConfirmationDialog
              dialogHeader='Take this book?'
              diaalogTitle={`Are you sure to take this book?  With your credit card will be charged ${bookDetails.cost}`}
              closeButtonTitle='Cancel'
              confirmButtonTitle='Accept'
              closeDialog={this.toogleDialog}
              confirmDialog={this.takeBook}
            />}
          </div>
        </DialogContent>
        <DialogActions className='book-details__modal--dialog-action'>
          {!editMode ? <>
            <Button
              onClick={closeDialog}
              className='button next confirmationdialog-button-size'
              text='OK'
            />
          </>
            : <>
              <Button
                onClick={this.deleteBook}
                className='button cancel confirmationdialog-button-size'
                text='Delete'
              />
              <Button
                onClick={closeDialog}
                className='button cancel confirmationdialog-button-size'
                text='Cancel'
              />
              <Button
                onClick={isAddNewBook ? this.addNewBook : this.updateBook}
                className={`button ${valid ? 'next' : 'btn-disabled'} confirmationdialog-button-size`}
                text='Confirm'
              />
            </>}
        </DialogActions>
      </Dialog>
    );
  }
}

BookDetails.propTypes = {};

const mapStateToProps = (store) => ({
  formData: store.form.bookDetailsForm && store.form.bookDetailsForm.values && store.form.bookDetailsForm.values,
  ganres: store.filtersReducer.filters.genres,
});

const mapDispatchToProps = dispatch => {
  return {
    initialize: () => dispatch(initialize('bookDetailsForm')),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'bookDetailsForm',
})(BookDetails));
