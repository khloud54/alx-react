import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';

describe('<BodySection />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  it('renders correctly the children and one h2 element', () => {
    const wrapper = shallow(
      <BodySection title='test title'>
        <p>test children node</p>
      </BodySection>
    );

    const heading = wrapper.find('h2');
    const paragraph = wrapper.find('p');

    expect(heading).toHaveLength(1);
    expect(heading.text()).toBe('test title');

    expect(paragraph).toHaveLength(1);
    expect(paragraph.text()).toBe('test children node');
  });
});
