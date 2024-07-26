import axios from 'axios';
import {API_URL} from '../constants';

/**
 * Fetches the weekly slots for the given date.
 *
 * @param {string} date - The date for which the weekly slots need to be fetched.
 * @returns {ITimeSlot[]} - A promise that resolves to the fetched weekly slots data.
 */
export const getWeeklySlots = async (date: string) => {
  let response = [];

  response = await axios
    .get(`${API_URL}GetWeeklySlots/${date}`)
    .then(items => items.data)
    .catch(error => {
      console.error('error ---->>>', error);
    });

  return response;
};
