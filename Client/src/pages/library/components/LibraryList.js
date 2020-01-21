import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'common/components/list/list';
import { ListToolbar } from 'common/components/list-toolbar/list-toolbar';
import { GenreCell } from 'common/components/list/custom-cell/genre-cell';
import Scrollbars from 'react-custom-scrollbars';
import { recursiveSearch } from 'utils/recursiveSearch';
import BookDetails from '../../book-details/BookDetails';
import {
  takeBook, updateBook, addBook, deleteBook,
} from '../actions/libraryActions';

export class LibraryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      showBookDetails: false,
      bookDetails: {},
      addNewBookModal: false,
    };
  }

  searchBooks = (searchValue) => {
    this.setState({
      searchValue,
    });
  }

  goToDetails = (book) => {
    this.setState({
      bookDetails: book,
    }, () => {
      this.setState({
        showBookDetails: true,
      });
    });
  }

  closeBookDetailsModal = () => {
    this.setState({
      showBookDetails: false,
    });
  }

  takeBook = (bookData) => {
    const { takeBook, userId } = this.props;
    const takeBookObject = {
      userId,
      id: bookData.id,
      cost: bookData.cost,
      amount: bookData.amount,
    };
    takeBook(takeBookObject);
  }

  updateBook = (bookData) => {
    const { updateBook } = this.props;
    updateBook(bookData);
  }

  addNewBookModal = () => {
    this.setState({
      bookDetails: {},
      addNewBookModal: true,
    }, () => {
      this.setState({
        showBookDetails: true,
      });
    });
  }

  addNewBook = (bookData) => {
    const { addBook } = this.props;
    const sendObject = {
      ...bookData,
      genres: bookData.genres_to_books.reduce((acc, item) => {
        acc.push(item.valueId);
        return acc;
      }, []),
    };
    addBook(sendObject);
    this.setState({
      addNewBookModal: false,
    });
  }

  deleteBook = (id) => {
    const { deleteBook } = this.props;
    deleteBook({ id });
  }

  render() {
    const { columnsToDisplay, books, isAdmin } = this.props;
    const {
      searchValue, showBookDetails, bookDetails, addNewBookModal,
    } = this.state;
    return (
      <div className='page-cont'>
        {showBookDetails && <BookDetails
          takeBook={this.takeBook}
          bookDetails={bookDetails}
          closeDialog={this.closeBookDetailsModal}
          editMode={isAdmin}
          updateBook={this.updateBook}
          isAddNewBook={addNewBookModal}
          addNewBook={this.addNewBook}
          deleteBook={this.deleteBook}
        />}
        <ListToolbar
          title={`Books (${books && books.length})`}
          search={this.searchBooks}
          columnsToDisplay={columnsToDisplay}
          searchPlaceholder='Search Books'
          searchValue={searchValue}
          showAddButton={isAdmin}
          onAddNew={this.addNewBookModal}
        />
        <Scrollbars
          autoHide
          autoHideTimeout={300}
          className='custom_scrollbar-container'
        >
          <div className='page-container_for-scroll' id='employees'>
            <List
              page='employees'
              columnsToDisplay={columnsToDisplay}
              items={books ? recursiveSearch(books, searchValue) : []}
              onItemClick={this.goToDetails}
              hideDots
              dontShowOptions
              fixedHeader
              config={{
                'genres_to_books': { cell: GenreCell },
              }}
            />
          </div>
        </Scrollbars>
      </div>
    );
  }
}

LibraryList.propTypes = {};

const mapStateToProps = (store) => ({
  userId: store.authReducer.user.id,
  books: store.libraryReducer.libraryBooks,
  columnsToDisplay: store.libraryReducer.columnsToDisplay,
  isAdmin: store.authReducer.user.role.name === 'admin' ? true : false,
});

const mapDispatchToProps = {
  takeBook,
  updateBook,
  addBook,
  deleteBook,
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
