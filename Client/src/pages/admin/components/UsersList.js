import * as React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List } from 'common/components/list/list';
import { ListToolbar } from 'common/components/list-toolbar/list-toolbar';
import { CountBookCell } from 'common/components/list/custom-cell/countBook-cell';
import { SelectCell } from 'common/components/list/custom-cell/select-cell';
import { DeleteCell } from 'common/components/list/custom-cell/delete-cell';
import Scrollbars from 'react-custom-scrollbars';
import { recursiveSearch } from 'utils/recursiveSearch';
import { updateUserRole, deleteUser } from '../actions/adminActions';

export class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
  }

  componentDidUpdate() {
  }

  searchusers = (searchValue) => {
    this.setState({
      searchValue,
    });
  }

  updateUserRole = (item) => {
    const { updateUserRole } = this.props;
    updateUserRole({ roleId: item.role, id: item.id });
  }

  deleteUser = (id) => {
    const { deleteUser } = this.props;
    deleteUser({ id });
  }

  render() {
    const { columnsToDisplay, users, roles } = this.props;
    const {
      searchValue,
    } = this.state;
    return (
      <div className='page-cont'>
        <ListToolbar
          title={`Users (${users && users.length})`}
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
              items={users ? recursiveSearch(users, searchValue) : []}
              hideDots
              dontShowOptions
              fixedHeader
              config={{
                'users_to_books': { cell: CountBookCell },
                'role': { cell: SelectCell, options: roles, valueSetter: this.updateUserRole },
                'deleted': { cell: DeleteCell, valueSetter: this.deleteUser },
              }}
            />
          </div>
        </Scrollbars>

      </div>
    );
  }
}

UsersList.propTypes = {};

const mapStateToProps = (store) => ({
  users: store.adminReducer.users,
  columnsToDisplay: store.adminReducer.columnsToDisplayUsers,
  userId: store.authReducer.user.id,
  roles: store.filtersReducer.filters.roles,
});

const mapDispatchToProps = {
  updateUserRole,
  deleteUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
