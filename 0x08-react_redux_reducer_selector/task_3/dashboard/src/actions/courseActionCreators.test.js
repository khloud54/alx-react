import { selectCourse, unSelectCourse } from './courseActionCreators';
import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

describe('action creators test', () => {
  it('should return correct object for "selectCourse"', () => {
    const action = selectCourse(1);
    expect(action).toEqual({ type: SELECT_COURSE, index: 1 });
  });

  it('should return the correct object for "unselectCourse"', () => {
    const action = unSelectCourse(1);
    expect(action).toEqual({ type: UNSELECT_COURSE, index: 1 });
  });
});
