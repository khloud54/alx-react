import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseListRow from './CourseListRow';

describe('<CourseListRow />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  it('renders one cell with colspan = 2 when textSecondCell does not exist (isHeader=true)', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader
        textFirstCell='Course name'
        textSecondCell={null}
      />
    );
    const cell = wrapper.find('th');
    expect(cell).toHaveLength(1);
    expect(cell.prop('colSpan')).toBe(2);
  });

  it('renders two cells when textSecondCell is present (isHeader=true)', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader
        textFirstCell='Course name'
        textSecondCell={!null}
      />
    );
    expect(wrapper.find('th')).toHaveLength(2);
  });

  it('renders correctly two td elements within a tr element (isHeader=false)', () => {
    const wrapper = shallow(
      <CourseListRow isHeader={false} textFirstCell='Course name' />
    );
    const row = wrapper.find('tr');
    expect(row.find('td')).toHaveLength(2);
  });
});
