import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  test('Notifications renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const listItems = wrapper.find('ul').find('li');
    expect(listItems).toHaveLength(3);
  });

  test('Notifications renders the text "Here is the list of notifications"', () => {
    const wrapper = shallow(<Notifications />);
    const text = wrapper.find('p').text();
    expect(text).toBe('Here is the list of notifications');
  });
});
