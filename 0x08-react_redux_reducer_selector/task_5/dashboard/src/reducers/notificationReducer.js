import { Map } from 'immutable';
import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

export const initialNotificationState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

const notificationReducer = (state = Map(initialNotificationState), action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedData = notificationsNormalizer(action.data);
      Object.keys(normalizedData.notifications).forEach((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.merge(normalizedData);
    case MARK_AS_READ:
      return state.setIn(
        ['notifications', String(action.index), 'isRead'],
        true
      );
    case SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    default:
      break;
  }
  return state;
};

export default notificationReducer;
