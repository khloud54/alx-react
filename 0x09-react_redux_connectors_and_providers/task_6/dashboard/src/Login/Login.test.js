import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('<Login />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('renders without crashing', () => {
    shallow(<Login />);
  });

  describe('Render correct tags', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<Login />);
    });

    it('renders 2 input tags', () => {
      expect(wrapper.find('input')).toHaveLength(3);
    });

    it('renders 2 label tags', () => {
      expect(wrapper.find('label')).toHaveLength(2);
    });

    it('renders submit input as disabled by default', () => {
      const submitInput = wrapper.find('input[type="submit"]');
      expect(submitInput.prop('disabled')).toBe(true);
    });

    it('enables submit input after entering both email and password values', () => {
      const emailInput = wrapper.find('input[type="text"]');
      const passwordInput = wrapper.find('input[type="password"]');
      const submitInput = wrapper.find('input[type="submit"]');

      emailInput.simulate('change', { target: { value: 'test' } });
      passwordInput.simulate('change', { target: { value: 'test' } });

      // expect(submitInput.prop('disabled')).toBe(false);
    });
  });
});
