import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';

import {
  selectCourse,
  unSelectCourse,
  setCourses,
  fetchCourses,
} from './courseActionCreators';

import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('action creators test', () => {
  it('should return correct object for "selectCourse"', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('should return the correct object for "unselectCourse"', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });

  it('verifies fetch is working correctly', () => {
    const store = mockStore();
    fetchMock.restore();

    fetchMock.get('./courses.json', '{}');

    return store.dispatch(fetchCourses()).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({ type: FETCH_COURSE_SUCCESS });
      expect(actions[0]).toEqual(setCourses({}));
    });
  });
});
