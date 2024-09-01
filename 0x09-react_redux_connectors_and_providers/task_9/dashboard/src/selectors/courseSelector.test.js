import { Map, fromJS } from 'immutable';
import { getListCourses } from './courseSelector';

describe('getListCourses', () => {
  it('returns an array for default state', () => {
    const state = getListCourses(undefined, {});
    expect(state).toEqual(Map());
  });

  it('returns expected results', () => {
    const state = {
      courses: fromJS([
        {
          id: 1,
          name: 'ES6',
          credit: 60,
          isSelected: false,
        },
        {
          id: 2,
          name: 'Webpack',
          credit: 20,
          isSelected: false,
        },
        {
          id: 3,
          name: 'React',
          credit: 40,
          isSelected: false,
        },
      ]),
    };

    const expectedReults = [
      {
        id: 1,
        name: 'ES6',
        credit: 60,
        isSelected: false,
      },
      {
        id: 2,
        name: 'Webpack',
        credit: 20,
        isSelected: false,
      },
      {
        id: 3,
        name: 'React',
        credit: 40,
        isSelected: false,
      },
    ];

    const selected = getListCourses(state);
    expect(selected.toJS).toEqual(expectedReults);
  });
});
