import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySectionWithMarginBottom from './BodySectionWithMarginBottom';
import BodySection from './BodySection';

describe('<BodySectionWithMarginBottom />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('correctly renders BodySection component with props', () => {
    const props = {
      ttile: 'test title',
      children: <p>test children node</p>
    };

    const wrapper = shallow(<BodySectionWithMarginBottom {...props} />);
    expect(wrapper.find(BodySection)).toHaveLength(1);

    const bodySectionProps = wrapper.find(BodySection).props();
    expect(bodySectionProps.title).toEqual(props.title);
    expect(bodySectionProps.children).toEqual(props.children);
  });
});
