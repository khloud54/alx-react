import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import { getLatestNotification } from '../utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { StyleSheet, css } from 'aphrodite';
import { AppContext } from './AppContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: AppContext._currentValue.user,
      displayDrawer: false,
      listNotifications: [
        { id: 101, type: 'default', value: 'New course available' },
        { id: 102, type: 'urgent', value: 'New resume available' },
        { id: 103, type: 'urgent', html: { __html: getLatestNotification() } },
      ],
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
    });
  }

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === 'h') {
      alert('Logging you out');
      this.logOut();
    }
  }

  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true,
    });
  }

  handleHideDrawer() {
    this.setState({
      displayDrawer: false,
    });
  }

  markNotificationAsRead(id) {
    const { listNotifications } = this.state;

    this.setState({
      listNotifications: listNotifications.filter(
        (notification) => notification.id !== id
      ),
    });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {
    const { user, displayDrawer, listNotifications } = this.state;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Notifications
          listNotifications={listNotifications}
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <div className={css(styles.body)}>
          <Header />
          <div className='App-body'>
            {user.isLoggedIn ? (
              <BodySectionWithMarginBottom title='Course list'>
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title='Log in to continue'>
                <Login logIn={this.logIn} />
              </BodySectionWithMarginBottom>
            )}
            <BodySection title='News from the School'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                gravida augue id mi commodo, vel fringilla quam fermentum. Fusce
                euismod luctus leo, a ultricies elit hendrerit non. Integer nec
                nulla nec urna fermentum feugiat eu eu tellus. Integer rhoncus
                orci non finibus sodales. In ut augue a libero ullamcorper
                bibendum vel nec nulla. Nullam bibendum nulla nec risus
                malesuada, vel ullamcorper nulla iaculis. Integer hendrerit
                massa ac urna vehicula, id rhoncus purus bibendum. Integer nec
                fermentum mi.
              </p>
            </BodySection>
          </div>
          <div className={css(styles.footer)}>
            <Footer />
          </div>
        </div>
      </AppContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    fontSize: '16px',
    display: 'flex',
    flexDirection: 'column',
  },

  footer: {
    borderTop: '3px solid #E0354B',
    width: '98%',
    textAlign: 'center',
  },
});

export default App;
