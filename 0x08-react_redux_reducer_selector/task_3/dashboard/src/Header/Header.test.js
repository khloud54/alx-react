import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('<Header />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  describe('Render correct tag', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Header />);
    });

    it('renders img tag', () => {
      expect(wrapper.find('img')).toHaveLength(1);
    });

    it('renders h1 tag', () => {
      expect(wrapper.find('h1')).toHaveLength(1);
    });
  });
});
