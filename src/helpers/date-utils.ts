import moment from 'moment';

/**
 * Get the date of the current Monday.
 *
 * @returns The date of the current Monday in the format 'YYYYMMDD'.
 */
export const getMonday = (): string => {
  const today = moment();
  const day = today.day();
  const monday = today.subtract(day === 0 ? 6 : day - 1, 'days');

  return monday.format('YYYYMMDD');
};

/**
 * Get the date of a different Monday based on the provided current Monday date.
 *
 * @param curentMonday - The date of the current Monday in the format 'YYYYMMDD'.
 * @param day - An optional parameter that specifies the number of days before or after the current Monday.
 *                  If not provided, it defaults to -1, which means the previous Monday.
 *
 * @returns The date of the different Monday in the format 'YYYYMMDD'.
 */
export const getDiferentMonday = (curentMonday: string, day = -1): string => {
  const startDate = moment(curentMonday);
  const prevMonday = startDate.clone().day(day); // .day(8) gets the next Monday; .day(-6) gets the prev Monday

  return prevMonday.format('YYYYMMDD');
};

/**
 * Get the time from the provided datetime string.
 *
 * @param datetime - The datetime string in the format 'YYYYMMDDHHmmss'.
 *
 * @returns The time extracted from the datetime string in the format 'HH:mm'.
 */
export const getTime = (datetime: string): string => {
  const extractedTime = moment(datetime).format('HH:mm');

  return extractedTime;
};

/**
 * Get the datetime from the provided datetime string and format it.
 *
 * @param datetime - The datetime string in the format 'YYYYMMDDHHmmss'.
 *
 * @returns The datetime string in the format 'HH:mm, DD-MM-YYYY'.
 */
export const getDateTime = (datetime: string): string => {
  const time = getTime(datetime);
  const extractedDate = moment(datetime).format('DD-MM-YYYY');

  return `${time}, ${extractedDate}`;
};

/**
 * Get the formatted date from the provided date string.
 *
 * @param date - The date string in the format 'YYYYMMDD'.
 *
 * @returns The date string in the format 'dddd, DD MMMM'.
 */
export const getFormattedDate = (date: string): string => {
  return moment(date).format('dddd, DD MMMM');
};

/**
 * Update the date range for the provided date.
 *
 * @param date - The date string in the format 'YYYYMMDD'.
 *
 * @returns The date range in the format 'D MMM - D MMM'.
 */
export const updateDateRange = (date: string): string => {
  const startOfWeek = moment(date).clone().startOf('isoWeek');
  const endOfWeek = moment(date).clone().endOf('isoWeek');

  return `${startOfWeek.format('D MMM')} - ${endOfWeek.format('D MMM')}`;
};

/**
 * Format the provided datetime string.
 *
 * @param dateTime - The datetime string in the format 'YYYYMMDDHHmmss'.
 *
 * @returns The datetime string in the format 'hh:mm, MM-DD-YYYY'.
 */
export const formatDatetime = (dateTime: string): string => {
  const dt = moment(dateTime);
  const currentDateTime = dt.format('hh:mm, MM-DD-YYYY');

  return currentDateTime;
};

/**
 * Checks if the first provided date is before the second provided date.
 *
 * @param firstDate  - The first date to compare in a format that Moment.js can parse.
 * @param secondDate - The second date to compare in a format that Moment.js can parse.
 *
 * @returns A boolean indicating whether the first date is before the second date.
 *          Returns `true` if `firstDate` is before `secondDate`, otherwise `false`.
 */
export const isSameOrBefore = (
  firstDate: moment.MomentInput,
  secondDate: moment.MomentInput,
): boolean => {
  let isBefore = false;

  isBefore = moment(firstDate).isSameOrBefore(moment(secondDate));
  return isBefore;
};
