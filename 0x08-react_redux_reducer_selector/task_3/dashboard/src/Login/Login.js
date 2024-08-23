import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      enableSubmit: false,
    };

    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit = (e) => {
    e.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    this.setState({
      email,
      enableSubmit: email !== '' && this.state.password !== '',
    });
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    this.setState({
      password,
      enableSubmit: this.state.email !== '' && password !== '',
    });
  };

  render() {
    const { email, password, enableSubmit } = this.state;
    return (
      <div className={css(styles.Div)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label className={css(styles.Margin)} htmlFor='email'>
            Email:
            <input
              className={css(styles.Margin)}
              type='text'
              id='email'
              name='email'
              value={email}
              onChange={this.handleChangeEmail}
            />
          </label>
          <label className={css(styles.Margin)} htmlFor='password'>
            Password:
            <input
              className={css(styles.Margin)}
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={this.handleChangePassword}
            />
          </label>
          <input
            type='submit'
            className={css(styles.Button)}
            value='OK'
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  Div: {
    '@media only screen and (max-width: 600px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },

  Button: {
    width: '35px',
  },
});
