import React from 'react';
import { mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('<WithLogging />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('logs to console on mount and unmount with "Component" when wrapped element is pure HTML', () => {
    console.log = jest.fn();
    const HOC = WithLogging(() => <p />);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenCalledWith('Component Component is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      'Component Component is going to unmount'
    );
  });

  it('logs to console on mount and unmount with "Login" when wrapped element is the Login component', () => {
    console.log = jest.fn();
    const HOC = WithLogging(Login);
    const wrapper = mount(<HOC />);
    expect(wrapper.exists()).toEqual(true);
    expect(console.log).toHaveBeenCalledWith('Component Login is mounted');
    wrapper.unmount();
    expect(console.log).toHaveBeenCalledWith(
      'Component Login is going to unmount'
    );
  });
});
