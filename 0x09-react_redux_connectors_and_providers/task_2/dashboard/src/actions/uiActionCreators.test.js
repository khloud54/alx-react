import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

import {
  LOGIN,
  LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
  loginSuccess,
  loginFailure,
  loginRequest,
} from './uiActionCreators';

const middleware = [thunk];
const mockStore = configureStore(middleware);

describe('test for four action types', () => {
  it('returns the correct action and user object for login', () => {
    const user = { email: 'test@email.com', password: 'pass1234' };
    const expectedObject = { type: LOGIN, user };

    const action = login(user.email, user.password);
    expect(action).toEqual(expectedObject);
  });

  it('returns the correct action for logout', () => {
    const action = logout();
    expect(action).toEqual({ type: LOGOUT });
  });

  it('returns the correct action for displayNotificationDrawer', () => {
    const action = displayNotificationDrawer();
    expect(action).toEqual({ type: DISPLAY_NOTIFICATION_DRAWER });
  });

  it('returns the correct action for hideNotificationDrawer', () => {
    const action = hideNotificationDrawer();
    expect(action).toEqual({ type: HIDE_NOTIFICATION_DRAWER });
  });
});

describe('test async action creators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('returns the right response with LOGIN and LOGIN_SUCCESS actions', () => {
    const store = mockStore({});

    fetchMock.restore();

    const user = {
      email: 'test@email.com',
      password: 'pass1234',
    };

    fetchMock.get('/login-success.json', '{}');

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginSuccess());
    });
  });

  it('verifies if API query fails and returns response with LOGIN and LOGIN_FAILURE actions', () => {
    const store = mockStore({});

    fetchMock.mock('/login-success.json', 500);

    const user = {
      email: 'test@email.com',
      password: 'pass1234',
    };

    return store.dispatch(loginRequest(user.email, user.password)).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual(login(user.email, user.password));
      expect(actions[1]).toEqual(loginFailure());
    });
  });
});
