import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';

describe('<NotificationItem />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('renders the correct html by passing dummy type and value props', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    const listItem = wrapper.find('li');
    expect(listItem).toHaveLength(1);
    expect(listItem.text()).toBe('test');
    expect(listItem.prop('data-notification-type')).toBe('default');
  });

  it('renders the correct html by passing dummy html prop', () => {
    const htmlProp = { __html: '<u>test</u>' };
    const wrapper = shallow(
      <NotificationItem type='default' html={htmlProp} />
    );
    const listItem = wrapper.find('li');
    expect(listItem.prop('data-notification-type')).toBe('default');
  });
});
