import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

export const selectCourse = (index) => {
  return {
    type: SELECT_COURSE,
    index,
  };
};

export const unSelectCourse = (index) => {
  return {
    type: UNSELECT_COURSE,
    index,
  };
};

// Bounded actions

export const boundSelectCourse = (index) => (dispatch) => {
  dispatch(selectCourse(index));
};

export const boundunSelectCourse = (index) => (dispatch) => {
  dispatch(unSelectCourse(index));
};
