import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

export const initialNotificationState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

const notificationReducer = (state = initialNotificationState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return action.data.map((notification) => {
        return {
          ...notification,
          isRead: false,
        };
      });
    case MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notification) => {
          const current = {
            ...notification,
          };
          if (notification.id === action.index) current.isRead = true;
          return current;
        }),
      };
    case SET_TYPE_FILTER:
      return {
        ...state,
        filter: action.filter,
      };
    default:
      break;
  }
  return state;
};

export default notificationReducer;
