import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape';
import NotificationItem from './NotificationItem';

class Notifications extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    console.log('Close button has been clicked');
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead,
    } = this.props;

    const displayMenu = displayDrawer ? styles.HideMenu : styles.MenuItem;

    return (
      <>
        <div
          className={`${css(displayMenu)} menuItem`}
          onClick={handleDisplayDrawer}
        >
          Your notifications
        </div>
        {displayDrawer && (
          <div className={`${css(styles.Notifications)} Notifications`}>
            <p className={css(styles.Paragraph)}>
              {listNotifications.length > 0 &&
                'Here is the list of notifications'}
              <button
                className={css(styles.Button)}
                aria-label='Close'
                onClick={(e) => {
                  console.log('Close button has been clicked');
                  handleHideDrawer();
                }}
              >
                <img
                  className={css(styles.CloseImg)}
                  src={require('../assets/close-icon.png')}
                  alt='Close icon'
                />
              </button>
            </p>
            {listNotifications.length === 0 ? (
              <p className={css(styles.Paragraph)}>
                No new notification for now
              </p>
            ) : (
              <ul className={css(styles.List)}>
                {listNotifications.map((notification) => {
                  const props = {
                    type: notification.type,
                    ...(notification.value
                      ? { value: notification.value }
                      : { html: notification.html }),
                  };

                  return (
                    <NotificationItem
                      key={notification.id}
                      {...props}
                      id={notification.id}
                      markNotificationAsRead={markNotificationAsRead}
                    />
                  );
                })}
              </ul>
            )}
          </div>
        )}
      </>
    );
  }
}

const fadeIn = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const bounce = {
  '25%': {
    transform: 'translateY(0px)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
  '75%': {
    transform: 'translateY(5px)',
  },
};

const styles = StyleSheet.create({
  Notifications: {
    border: '1px dashed #E0354B',
    padding: '5px',
    margin: '5px auto 0',
    position: 'absolute',
    right: '1em',

    '@media only screen and (max-width: 900px)': {
      width: '100%',
      height: '100%',
      fontSize: '20px',
      backgroundColor: 'white',
      border: 'none',
      padding: '0',
      margin: '0',
      right: '0',
      top: 0,
    },
  },

  MenuItem: {
    display: 'block',
    position: 'absolute',
    right: '1em',
    marginTop: '1em',
    marginRight: '1em',
    backgroundColor: '#fff8f8',
    cursor: 'pointer',

    ':hover': {
      animationName: [fadeIn, bounce],
      animationDuration: '1s, 0.5s',
      animationIterationCount: '3, 3',
    },
  },

  HideMenu: {
    display: 'none',
  },

  Button: {
    backgroundColor: '#fff',
    border: 'none',
    cursor: 'pointer',
    marginLeft: '10px',
    position: 'absolute',
    right: '5px',
  },

  CloseImg: {
    width: '8px',
  },

  Paragraph: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '0.5em',
    marginRight: '30px',
  },

  List: {
    '@media only screen and (max-width: 900px)': {
      padding: 0,
    },
  },
});

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleHideDrawer: () => {},
  handleDisplayDrawer: () => {},
  markNotificationAsRead: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

export default Notifications;
