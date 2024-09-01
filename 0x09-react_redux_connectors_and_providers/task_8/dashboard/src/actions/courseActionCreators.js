import 'node-fetch';
import {
  SELECT_COURSE,
  UNSELECT_COURSE,
  FETCH_COURSE_SUCCESS,
} from './courseActionTypes';

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

export const setCourses = (courses) => {
  return {
    type: FETCH_COURSE_SUCCESS,
    data: courses,
  };
};

export const fetchCourses = () => {
  return (dispatch) => {
    fetch('./courses.json')
      .then((response) => response.json())
      .then((data) => dispatch(setCourses(data)))
      .catch((error) => console.log(error));
  };
};

// Bounded actions

export const boundSelectCourse = (index) => (dispatch) => {
  dispatch(selectCourse(index));
};

export const boundunSelectCourse = (index) => (dispatch) => {
  dispatch(unSelectCourse(index));
};
