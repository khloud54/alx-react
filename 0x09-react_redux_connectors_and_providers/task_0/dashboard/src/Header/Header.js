import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from '../App/AppContext';
import headerLogo from '../assets/holberton_logo.jpg';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

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

export default Header;
