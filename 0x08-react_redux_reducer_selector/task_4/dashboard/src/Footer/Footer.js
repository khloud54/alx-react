import React, { useContext } from 'react';
import { AppContext } from '../App/AppContext';
import { getFullYear, getFooterCopy } from '../utils';
import { StyleSheet, css } from 'aphrodite';

export default function Footer() {
  const { user } = useContext(AppContext);
  const isIndex = true;

  return (
    <>
      <p>
        <em>
          Copyright {getFullYear()} - {getFooterCopy(isIndex)}
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

const styles = StyleSheet.create({
  contact: {
    color: '#E0354B',
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline',
    },
  },
});
