import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'common/components/list/list';
import { ListToolbar } from 'common/components/list-toolbar/list-toolbar';
import Scrollbars from 'react-custom-scrollbars';
import { recursiveSearch } from 'utils/recursiveSearch';
import { updateUserRole, deleteUser } from '../actions/adminActions';

export class PaymentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      payments: [],
    };
  }

  componentDidMount() {
    this.setRenderPaymentsArray();
  }

  componentDidUpdate(prevProps) {
    const { payments } = this.props;
    if (prevProps.payments !== payments) {
      this.setRenderPaymentsArray();
    }
  }

  setRenderPaymentsArray = () => {
    const { payments } = this.props;
    const paymentsArray = payments ? payments.reduce((acc, item) => {
      acc.push({
        id: item.id,
        paymentCost: item.cost,
        datePeyment: item.date,
        bookId: item.book.id,
        bookName: item.book.name,
        currenCost: item.book.cost,
        userId: item.user.id,
        userName: item.user.name,
      });
      return acc;
    }, []) : [];
    this.setState({
      payments: paymentsArray,
    });
  }

  searchusers = (searchValue) => {
    this.setState({
      searchValue,
    });
  }

  render() {
    const { columnsToDisplay } = this.props;
    const {
      searchValue, payments,
    } = this.state;
    return (
      <div className='page-cont'>
        <ListToolbar
          title={`Payments (${payments && payments.length})`}
          search={this.searchusers}
          columnsToDisplay={columnsToDisplay}
          searchPlaceholder='Search users'
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
              items={payments ? recursiveSearch(payments, searchValue) : []}
              hideDots
              dontShowOptions
              fixedHeader
            />
          </div>
        </Scrollbars>

      </div>
    );
  }
}

PaymentsList.propTypes = {};

const mapStateToProps = (store) => ({
  payments: store.adminReducer.payments,
  columnsToDisplay: store.adminReducer.columnsToDisplayPayments,
  userId: store.authReducer.user.id,
  roles: store.filtersReducer.filters.roles,
});

const mapDispatchToProps = {
  updateUserRole,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(PaymentsList);
