import { createSelector } from 'reselect';

export const filterTypeSelected = (data) => data.get('filter');

export const getNotifications = (data) => data.get('notifications');

const getNotificationsSelector = (state) => state.notifications;

export const getUnreadNotificationsByType = createSelector(
  getNotificationsSelector,
  (notifications) => {
    const messages = notifications.get('messages');
    const filter = notifications.get('filter');

    if (messages) {
      let filtered;

      if (filter === 'URGENT') {
        filtered = messages
          .valueSeq()
          .filter(
            (message) =>
              message.get('isRead') === 'false' &&
              message.get('type') === 'urgent'
          );
      } else {
        filtered = messages
          .valueSeq()
          .filter((message) => message.get('isRead') === 'false');
      }

      return filtered;
    }
    return messages;
  }
);
