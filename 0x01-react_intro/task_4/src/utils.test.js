import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear function', () => {
  test('Returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy function', () => {
  test('Returns the correct string when the argument is true', () => {
    expect(getFooterCopy(true)).toEqual('Holberton School');
  });

  test('Returns the correct string when the argument is false', () => {
    expect(getFooterCopy(false)).toEqual('Holberton School main dashboard');
  });
});

describe('getLatestNotification fucntion', () => {
  test('Check the required latest notification string', () => {
    const latestNotificationString =
      '<strong>Urgent requirement</strong> - complete by EOD';
    expect(getLatestNotification()).toEqual(latestNotificationString);
  });
});
