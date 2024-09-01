import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, css } from 'aphrodite';
import CourseShape from './CourseShape';
import CourseListRow from './CourseListRow';
import {
  fetchCourses,
  selectCourse,
  unSelectCourse,
} from '../actions/courseActionCreators';
import { getCourseList } from '../selectors/courseSelector';

function CourseList(props) {
  function onChangeRow(id, checked) {
    if (checked) {
      this.props.selectCourse(id);
    } else {
      this.props.unSelectCourse(id);
    }
  }

  return (
    <table id='CourseList' className={css(tableStyles.Table)}>
      <thead className={css(tableStyles.Thead)}>
        <CourseListRow textFirstCell='Available courses' isHeader />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader
        />
      </thead>
      <tbody className={css(tableStyles.Tbody)}>
        {props.listCourses.length > 0 ? (
          props.listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              id={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
              isHeader={false}
              isChecked={course.isSelected}
              onChangeRow={onChangeRow}
            />
          ))
        ) : (
          <tr>
            <td style={{ textAlign: 'center' }} colSpan={2}>
              No course available yet
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

const tableStyles = StyleSheet.create({
  Table: {
    display: 'table',
    border: '1px solid',
    borderCollapse: 'collapse',
    margin: '2rem auto 0 auto',
    width: '90%',
  },

  Thead: {
    border: 'solid 1px #ccc',
  },

  Tbody: {
    border: 'solid 1px #ccc',
  },
});

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
  fetchCourses: PropTypes.func,
  selectCourse: PropTypes.func,
  unSelectCourse: PropTypes.func,
};

CourseList.defaultProps = {
  listCourses: null,
  fetchCourses: () => {},
  selectCourse: () => {},
  unSelectCourse: () => {},
};

const mapStateToProps = (state) => {
  const courseList = getCourseList(state);
  return {
    listCourses: courseList,
  };
};

const mapDispatchToProps = {
  fetchCourses,
  selectCourse,
  unSelectCourse,
};

// export default CourseList;

export default connect(mapStateToProps, mapDispatchToProps)(CourseList);
