import {ITimeSlot} from '../interfaces/interface';
import {getFormattedDate} from './date-utils';

/**
 * Generates a random hexadecimal color code.
 *
 * This function generates a random hexadecimal color code by selecting 6 random characters from the set of hexadecimal characters (0-9, A-F).
 * The generated color code is prefixed with a '#' symbol.
 *
 * @returns A string representing a random hexadecimal color code.
 */
export function generateRandomHexColor() {
  const hexCharacters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Sorts the given weekly time slots into groups based on their start date.
 * Each group contains a title with the formatted date and an array of time slots.
 * If a time slot is taken, it will be assigned a random text color.
 *
 * @param weeklySlots - An array of time slots to be sorted.
 * @returns An array of objects, where each object represents a group of time slots with a formatted date title and an array of time slots.
 */
export const sortWeeklySlots = async (weeklySlots: ITimeSlot[]) => {
  let textColor = '';

  const grouped = weeklySlots.reduce((acc, item) => {
    const date = item.Start.split('T')[0];

    if (!acc[date]) {
      const formattedDate = getFormattedDate(date);
      textColor = generateRandomHexColor();
      acc[date] = {title: `${formattedDate}`, data: []};
    }
    if (item.Taken) {
      item.textColor = textColor;
    }
    acc[date].data.push(item);

    return acc;
  }, {});

  return Object.values(grouped);
};
