import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'common/components/list/list';
import { ListToolbar } from 'common/components/list-toolbar/list-toolbar';
import { GenreCell } from 'common/components/list/custom-cell/genre-cell';
import Scrollbars from 'react-custom-scrollbars';
import { recursiveSearch } from 'utils/recursiveSearch';
import BookDetails from '../../book-details/BookDetails';
import { returnMyBooks } from '../actions/myBookActions';

export class MyBooksList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      books: [],
      showBookDetails: false,
      bookDetails: {},
    };
  }

  componentDidMount() {
    this.setRenderBooksArray();
  }

  componentDidUpdate(prevProps) {
    const { books } = this.props;
    if (prevProps.books !== books) {
      this.setRenderBooksArray();
    }
  }

  setRenderBooksArray = () => {
    const { books } = this.props;
    const booksArray = books ? books.reduce((acc, item) => {
      acc.push({ ...item.book, user_to_book: item.id });
      return acc;
    }, []) : [];
    this.setState({
      books: booksArray,
    });
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

  returnBook = (bookData) => {
    const { returnMyBooks, userId } = this.props;
    const bookObj = {
      id: bookData.user_to_book,
      bookId: bookData.id,
      amount: bookData.amount,
      userId: userId,
    };
    returnMyBooks(bookObj);
  }

  render() {
    const { columnsToDisplay } = this.props;
    const {
      searchValue, books, showBookDetails, bookDetails,
    } = this.state;
    return (
      <div className='page-cont'>
        {showBookDetails && <BookDetails
          returnBook={this.returnBook}
          bookDetails={bookDetails}
          closeDialog={this.closeBookDetailsModal}
        />}
        <ListToolbar
          title={`Books (${books && books.length})`}
          search={this.searchBooks}
          columnsToDisplay={columnsToDisplay}
          searchPlaceholder='Search Books'
          searchValue={searchValue}
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
              items={recursiveSearch(books, searchValue)}
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

MyBooksList.propTypes = {};

const mapStateToProps = (store) => ({
  books: store.myBooksReducer.myBooks,
  columnsToDisplay: store.myBooksReducer.columnsToDisplay,
  userId: store.authReducer.user.id,
});

const mapDispatchToProps = {
  returnMyBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(MyBooksList);
