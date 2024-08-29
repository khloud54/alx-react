import {
  markAsAread,
  setNotificationFilter,
} from './notificationActionCreators';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  NotificationTypeFilters,
} from './notificationActionTypes';

describe('notification action creators', () => {
  it('return correct object for markAsRead with 1 as an argument', () => {
    const expectedObject = {
      type: MARK_AS_READ,
      index: 1,
    };

    const action = markAsAread(1);
    expect(action).toEqual(expectedObject);
  });

  it('returns correct object for setNotificationFilter action with NotificationTypeFilter filters as an argument', () => {
    const expectedObject = {
      type: SET_TYPE_FILTER,
      filter: 'DEFAULT',
    };

    const action = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(action).toEqual(expectedObject);
  });
});
