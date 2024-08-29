import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import { logOut } from '../actions/uiActionCreators';
import headerLogo from '../assets/holberton_logo.jpg';

export class Header extends Component {
  render() {
    const { user, logOut } = this.props;

    return (
      <div className={css(styles.header)}>
        <img
          className={css(styles.logo)}
          src={headerLogo}
          alt='Holberton logo'
        />
        <div className={css(styles.heading)}>
          <h1>School dashboard</h1>
          <div className={css(styles.welcomeUser)}>
            {user.isLoggedIn && (
              <>
                <hr width='100%' color='#e0354b' />
                <section id='LogoutSection'>
                  Welcome <strong>{user.email}</strong> &nbsp; &middot; &nbsp;
                  <span className={css(styles.logout)} onClick={logOut}>
                    Logout
                  </span>
                </section>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: '98%',
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#e0354b',
    borderBottom: '3px solid #e0354b',
  },

  heading: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'start',
    fontSize: '1rem',
    color: '#e0354b',
  },

  logo: {
    width: '200px',
    height: '200px',
  },

  welcomeUser: {
    width: '100%',
    height: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  logout: {
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

Header.contextType = AppContext;

Header.propTypes = {
  user: PropTypes.object,
  logOut: PropTypes.func,
};

Header.defaultProps = {
  user: null,
  logOut: () => {},
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

const mapDispatchToProps = {
  logOut,
};

// export default Header;

export default connect(mapStateToProps, mapDispatchToProps)(Header);
