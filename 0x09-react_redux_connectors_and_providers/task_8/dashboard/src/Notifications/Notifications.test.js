import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('<Notifications />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  describe('displayDrawer is false', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer={false} />);
    });

    it('displays div.menuItem when displayDrawer is false', () => {
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('does not display div.Notifications when displayDrawer is false', () => {
      expect(wrapper.find('div.Notifications')).toHaveLength(0);
    });
  });

  describe('displayDrawer is true', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Notifications displayDrawer />);
    });

    it('displays div.menuItem when displayDrawer is true', () => {
      expect(wrapper.find('div.menuItem')).toHaveLength(1);
    });

    it('displays div.Notifications when displayDrawer is true', () => {
      const notifications = [
        { id: 1, type: 'default', value: 'Notification 1' },
        { id: 2, type: 'urgent', value: 'Notification 2' },
      ];
      wrapper = shallow(
        <Notifications displayDrawer listNotifications={notifications} />
      );
      expect(wrapper.find('div.Notifications').exists()).toBe(true);
    });

    it('renders correctly if you pass an empty array', () => {
      wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
      expect(wrapper.find(NotificationItem)).toHaveLength(0);
    });
  });

  it('renders the right html for the first NotificationItem', () => {
    const firstItem = shallow(<NotificationItem />).first();
    expect(firstItem.is('li')).toBe(true);
  });

  it('renders correctly and with the right number of NotificationItem when you pass a list of notifications', () => {
    const notifications = [
      { id: 1, type: 'default', value: 'Notification 1' },
      { id: 2, type: 'urgent', value: 'Notification 2' },
    ];
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={notifications} />
    );
    expect(wrapper.find(NotificationItem)).toHaveLength(2);
  });

  it('displays the message "No new notification for now" and "Here is the list of notifications" is not displayed', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={[]} />
    );
    expect(wrapper.text()).not.toContain('Here is the list of notifications');
    expect(wrapper.text()).toContain('No new notification for now');
  });

  it('mocks console.log', () => {
    const spy = jest.spyOn(console, 'log');
    spy.mockImplementation(() => {});

    const wrapper = shallow(<Notifications notifications={[]} />);
    const instance = wrapper.instance();
    instance.markAsRead(1);

    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
    spy.mockRestore();
  });

  // it('does not rerender with the same list', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'Notification 1' },
  //     { id: 2, type: 'urgent', value: 'Notification 2' }
  //   ];
  //   const wrapper = mount(
  //     <Notifications
  //       displayDrawer={false}
  //       listNotifications={listNotifications}
  //     />
  //   );

  //   const shouldUpdateSpy = jest.spyOn(
  //     Notifications.prototype,
  //     'shouldComponentUpdate'
  //   );

  //   // Update with the same list
  //   wrapper.setProps({
  //     displayDrawer: true,
  //     listNotifications: [...listNotifications]
  //   });

  //   expect(shouldUpdateSpy).toHaveBeenCalledWith(
  //     {
  //       displayDrawer: true,
  //       listNotifications
  //     },
  //     null,
  //     {}
  //   );
  //   shouldUpdateSpy.mockRestore();
  // });

  // it('rerenders with a longer list', () => {
  //   const listNotifications = [
  //     { id: 1, type: 'default', value: 'Notification 1' },
  //     { id: 2, type: 'urgent', value: 'Notification 2' }
  //   ];
  //   const wrapper = mount(
  //     <Notifications
  //       displayDrawer={false}
  //       listNotifications={listNotifications}
  //     />
  //   );

  //   const shouldUpdateSpy = jest.spyOn(
  //     Notifications.prototype,
  //     'shouldComponentUpdate'
  //   );

  //   const longerList = [
  //     ...listNotifications,
  //     { id: 3, type: 'default', value: 'Notification 3' }
  //   ];

  //   // Update with a longer list
  //   wrapper.setProps({
  //     displayDrawer: true,
  //     listNotifications: longerList
  //   });

  //   expect(shouldUpdateSpy).toHaveBeenCalledWith(
  //     {
  //       displayDrawer: true,
  //       listNotifications: longerList
  //     },
  //     null,
  //     {}
  //   );

  //   shouldUpdateSpy.mockRestore();
  // });

  it('calls handleDisplayDrawer when clicking on the menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
      />
    );

    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on the close item', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer handleHideDrawer={handleHideDrawerMock} />
    );

    wrapper.find('button[aria-label="Close"]').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });

  it('calls fetchNotifications when the component is mounted', () => {
    const fetchNotificationsMock = jest.fn();

    shallow(<Notifications fetchNotifications={fetchNotificationsMock} />);

    expect(fetchNotificationsMock).toHaveBeenCalled();
    jest.restoreAllMocks();
  });

  describe('notifications filter', () => {
    const setNotificationFilterMock = jest.fn();

    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        setNotificationFilter={setNotificationFilterMock}
      />
    );

    it('calls setNotificationFilter with URGENT when the first button is clicked', () => {
      wrapper.find('#btnUrgentFilter').simulate('click');
      expect(setNotificationFilterMock).toHaveBeenCalledWith(1, 'URGENT');
    });

    it('calls setNotificationFilter with DEFAULT when the second button is clicked', () => {
      wrapper.find('#btnDefaultFilter').simulate('click');
      expect(setNotificationFilterMock).toHaveBeenCalledWith(2, 'DEFAULT');
    });

    jest.restoreAllMocks();
  });
});
