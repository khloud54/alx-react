import React from 'react';
import { NotificationsContainer } from './NotificationsContainer';
import { shallow } from 'enzyme';

describe('<NotificationsContainer />', () => {
  it('makes sure fetching happens on mount', () => {
    const fetchNotifications = jest.fn();

    shallow(<NotificationsContainer fetchNotifications={fetchNotifications} />);

    expect(fetchNotifications).toHaveBeenCalled();

    jest.restoreAllMocks();
  });
});
