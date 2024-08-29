import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { getFullYear, getFooterCopy } from '../utils';

export function Footer({ user }) {
  return (
    <>
      <p>
        <em>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </em>
      </p>
      {user.isLoggedIn && (
        <p>
          <a className={css(styles.contact)} href={`mailto:${user.email}`}>
            Contact us
          </a>
        </p>
      )}
    </>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const styles = StyleSheet.create({
  contact: {
    color: '#E0354B',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export default connect(mapStateToProps, null)(Footer);
