import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';
import CourseListRow from './CourseListRow';

describe('<CourseList />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  describe('Success render', () => {
    it('renders CourseList component without crashing', () => {
      shallow(<CourseList />);
    });
  });

  describe('With course list containing elements', () => {
    let wrapper;
    const courses = [
      { id: 101, type: 'default', value: 'New course available' },
      { id: 102, type: 'urgent', value: 'New resume available' },
      {
        id: 103,
        type: 'urgent',
        html: { __html: 'Urgent requirement - complete by EOD' },
      },
    ];

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={courses} />);
    });

    it('renders 5 different rows', () => {
      expect(wrapper.find(CourseListRow)).toHaveLength(5);
    });

    it('dispatches action when component is mounted', () => {
      const fetchCourses = jest.fn();
      shallow(<CourseList fetchCourses={fetchCourses} />);

      expect(fetchCourses).toHaveBeenCalled();
      jest.restoreAllMocks();
    });

    it('dispatches the two actions correctly when onChangeRow is called', () => {
      const fetchCourses = jest.fn();
      const selectCourse = jest.fn();
      const unSelectCourse = jest.fn();

      const wrapper = shallow(
        <CourseList
          fetchCourses={fetchCourses}
          selectCourse={selectCourse}
          unSelectCourse={unSelectCourse}
        />
      );

      const instance = wrapper.instance();
      instance.onChangeRow('1', true);

      expect(selectCourse).toHaveBeenCalled();

      instance.onChangeRow('1', false);

      expect(unSelectCourse).toHaveBeenCalled();

      jest.restoreAllMocks();
    });
  });

  describe('With listCourses empty', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = shallow(<CourseList listCourses={[]} />);
    });

    it('renders a row showing "No course available yet"', () => {
      const row = wrapper.find('tr');
      expect(row.text()).toEqual('No course available yet');
    });
  });
});
