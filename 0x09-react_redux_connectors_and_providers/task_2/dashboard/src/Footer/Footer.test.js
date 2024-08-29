import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Footer />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('at the very least renders the text “Copyright”', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

  it('does not render a link when user is not logged in', () => {
    const wrapper = shallow(<Footer user={null} />);
    expect(wrapper.find('a')).toHaveLength(0);
  });

  it('renders a link when user is logged in', () => {
    const wrapper = shallow(
      <Footer user={{ email: 'test@email.com', password: 'pass1234' }} />
    );
    expect(wrapper.find('a')).toHaveLength(1);
    expect(wrapper.find('a').text()).toContain('Contact us');
  });
});
