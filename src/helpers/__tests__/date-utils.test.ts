import {getDiferentMonday, getMonday, isSameOrBefore} from '../date-utils';

describe('tests dateUtils', () => {
  it('getMonday should return the correct date format "YYYYMMDD"', () => {
    Date.now = jest.fn(() => new Date('2020-05-13T12:33:37.000Z'));

    const expectedDate = '20200511';
    const result = getMonday();

    expect(result).toEqual(expectedDate);
  });
});

describe('getDiferentMonday', () => {
  it('should return the previous Monday when day is -6', () => {
    const currentMonday = '20220103';
    const expectedPreviousMonday = '20211227';

    expect(getDiferentMonday(currentMonday, -6)).toEqual(
      expectedPreviousMonday,
    );
  });

  it('should return the next Monday when day is 8', () => {
    const currentMonday = '20220103';
    const expectedNextMonday = '20220110';

    expect(getDiferentMonday(currentMonday, 8)).toEqual(expectedNextMonday);
  });
});

describe('isSameOrBefore', () => {
  it('should return false for different date and different time', () => {
    const firstDate = '202201011200'; // 2022-01-01 12:00:00
    const secondDate = '202201021300'; // 2022-01-02 13:00:00

    expect(isSameOrBefore(firstDate, secondDate)).toBe(false);
  });

  it('should return true for the same date and time in different formats', () => {
    const firstDate = '20220101T120000'; // 2022-01-01T12:00:00
    const secondDate = '20220101T120000'; // 2022-01-01T12:00:00

    expect(isSameOrBefore(firstDate, secondDate)).toBe(true);
  });
});
