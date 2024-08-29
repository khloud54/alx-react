import { Map, fromJS } from 'immutable';
import notificationReducer, {
  initialNotificationState,
} from './notificationReducer';

import {
  MARK_AS_READ,
  SET_TYPE_FILTER,
  FETCH_NOTIFICATIONS_SUCCESS,
} from '../actions/notificationActionTypes';
import notificationsNormalizer from '../schema/notifications';

describe('Notification reducer', () => {
  it('returns default object state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(Map(initialNotificationState));
  });

  it('returns list of notifications in a data attribute using FETCH_NOTIFICATIONS_SUCCESS action', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const data = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: 'DEFAULT',
      ...normalizedData,
    };

    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = false;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(undefined, action);
    expect(state.toJS()).toEqual(expectedData);
  });

  it('sends an index corresponding to the id of the notification to update using action MARK_AS_READ', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const action = {
      type: MARK_AS_READ,
      index: 2,
    };

    const data = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: true,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: 'DEFAULT',
      ...normalizedData,
    };

    expectedData.notifications[1].isRead = false;
    expectedData.notifications[2].isRead = true;
    expectedData.notifications[3].isRead = false;

    const state = notificationReducer(fromJS(initialState), action);
    expect(state.toJS()).toEqual(expectedData);
  });

  it('sends a filter attribute with either DEFAULT or URGENT using SET_TYPE_FILTER action', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    initialState.notifications = notificationsNormalizer(
      initialState.notifications
    ).notifications;

    const action = {
      type: SET_TYPE_FILTER,
      filter: 'URGENT',
    };

    const data = {
      filter: 'URGENT',
      notifications: [
        {
          id: 1,
          isRead: false,
          type: 'default',
          value: 'New course available',
        },
        {
          id: 2,
          isRead: false,
          type: 'urgent',
          value: 'New resume available',
        },
        {
          id: 3,
          isRead: false,
          type: 'urgent',
          value: 'New data available',
        },
      ],
    };

    const normalizedData = notificationsNormalizer(data);

    const expectedData = {
      filter: 'DEFAULT',
      ...normalizedData,
    };

    const state = notificationReducer(fromJS(initialState), action);
    expect(state.toJS()).toEqual(expectedData);
  });
});
