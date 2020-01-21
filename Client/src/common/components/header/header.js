import * as React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from 'common/actions/authActions';
import { Badge } from 'common/components/badges/badges';
import { getColorFromString } from 'utils/getColor';
import history from 'utils/history';
import './header.css';

export class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isUserMenuExpanded: false,
      isNotificationOpen: false,
      allNotifications: [],
      pathname: window.location.pathname,
    };
    history.listen(this.listenHistory);
  }

  expandUserMenu = () => {
    const { isUserMenuExpanded } = this.state;
    this.setState({
      isUserMenuExpanded: !isUserMenuExpanded,
    });
  }

  collapseUserMenu = () => {
    this.setState({
      isUserMenuExpanded: false,
    });
  }

  listenHistory = (location) => {
    this.setState({
      pathname: location.pathname,
    });
  }

  render() {
    const { user, logout, isAdmin } = this.props;
    const { isUserMenuExpanded, pathname } = this.state;
    return (
      <div className='header-cont'>
        <div className='main-part'>
          <Link to='/my-book'>
            <div
              className={classNames('heedaer-menu-block', { 'selected-tab': pathname.includes('/my-book') })}
            >
              <div className='text-expanded'>
                <span>My Books</span>
              </div>
            </div>
          </Link>
          <Link to='/library'>
            <div
              className={classNames('heedaer-menu-block', { 'selected-tab': pathname.includes('/library') })}
            >
              <div className='text-expanded'>
                <span>Library</span>
              </div>
            </div>
          </Link>
          {isAdmin && (<><Link to='/admin/users'>
            <div
              className={classNames('heedaer-menu-block', { 'selected-tab': pathname.includes('/admin/users') })}
            >
              <div className='text-expanded'>
                <span>Users</span>
              </div>
            </div>
          </Link>
            <Link to='/admin/payment'>
              <div
                className={classNames('heedaer-menu-block', { 'selected-tab': pathname.includes('/admin/payment') })}
              >
                <div className='text-expanded'>
                  <span>Payments</span>
                </div>
              </div>
            </Link> <Link to='/admin/top-books'>
              <div
                className={classNames('heedaer-menu-block', { 'selected-tab': pathname.includes('/admin/top-books') })}
              >
                <div className='text-expanded'>
                  <span>Top books</span>
                </div>
              </div>
            </Link>
          </>)}
        </div>
        <div
          className='user-menu-container'
          onMouseLeave={this.collapseUserMenu}
          onClick={this.expandUserMenu}
        >
          <div className='user-photo'>
            <Badge
              color={getColorFromString(user.name)}
              item={user.name}
            />
          </div>
          <div className='user-name'>
            <span>{user.name}</span>
          </div>
          <div className={classNames('user-menu-expander', { 'expanded__user-menu__expander': isUserMenuExpanded })}>
            <svg width='12' height='5' viewBox='0 0 12 5' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path d='M0 0L5.97518 5L11.9504 0H0Z' fill='#4B4B4B' />
            </svg>
          </div>
          <div className={classNames('user-menu', { 'expanded-user-menu': isUserMenuExpanded })}>
            <div className='user-menu-option' onClick={logout}>
              <span>Log out</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeaderComponent.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
};

export default connect(store => ({
  user: store.authReducer.user,
  isAdmin: store.authReducer.user.role.name === 'admin' ? true : false,
}), {
  logout,
})(HeaderComponent);
