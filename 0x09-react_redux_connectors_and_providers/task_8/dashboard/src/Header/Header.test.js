import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('<Header />', () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const USER = {
    email: 'test@email.com',
    password: 'pass1234',
  };

  it('renders without crashing', () => {
    shallow(<Header />);
  });

  describe('Render correct tag', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('renders img tag', () => {
      wrapper = shallow(<Header user={USER} />);
      wrapper.update();
      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders h1 tag', () => {
      wrapper = shallow(<Header user={USER} />);
      wrapper.update();
      expect(wrapper.find('h1')).toHaveLength(1);
    });

    it('mounts the Header component with default context. #LogoutSection is not rendered', () => {
      wrapper = shallow(<Header />);
      expect(wrapper.find('#LogoutSection')).toHaveLength(0);
    });

    it('mounts the Header component with user defined. #LogoutSection is rendered', () => {
      wrapper = shallow(<Header user={USER} />);
      expect(wrapper.find('#LogoutSection')).toHaveLength(1);
      expect(wrapper.find('#LogoutSection').text()).toContain('Logout');
    });
  });
});
