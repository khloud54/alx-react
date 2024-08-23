import React from 'react';

// Default user object
const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logout function
const defaultLogOut = () => {};

export const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});
