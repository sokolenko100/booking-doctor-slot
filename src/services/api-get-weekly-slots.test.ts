import axios from 'axios';
import {API_URL} from '../constants';
import {getWeeklySlots} from './api-get-weekly-slots';

describe('getWeeklySlots function', () => {
  it('should return correct data for valid date format', async () => {
    const validDate = '2022-01-01';
    const expectedData = {
      /* mock expected data */
    };
    jest.spyOn(axios, 'get').mockResolvedValue({data: expectedData});

    const result = await getWeeklySlots(validDate);

    expect(result).toEqual(expectedData);
    expect(axios.get).toHaveBeenCalledWith(
      `${API_URL}GetWeeklySlots/${validDate}`,
    );
  });

  it('should handle invalid date format', async () => {
    const invalidDate = 'invalid-date';
    const expectedError = new Error('Invalid date format');

    try {
      await getWeeklySlots(invalidDate);
    } catch (error: any) {
      expect(error.message).toEqual(expectedError.message);
    }
  });

  it('should handle network errors', async () => {
    const networkErrorMessage = 'Network error occurred';
    jest.spyOn(axios, 'get').mockRejectedValue(new Error(networkErrorMessage));

    try {
      await getWeeklySlots('2022-01-01');
    } catch (error: any) {
      expect(error.message).toEqual(networkErrorMessage);
    }
  });

  it('should handle server errors', async () => {
    const serverErrorMessage = 'Server error occurred';
    jest.spyOn(axios, 'get').mockRejectedValue(new Error(serverErrorMessage));

    try {
      await getWeeklySlots('2022-01-01');
    } catch (error: any) {
      expect(error.message).toEqual(serverErrorMessage);
    }
  });

  it('should handle unexpected errors', async () => {
    const unexpectedErrorMessage = 'Unexpected error occurred';
    jest.spyOn(axios, 'get').mockImplementationOnce(() => {
      throw new Error(unexpectedErrorMessage);
    });

    try {
      await getWeeklySlots('2022-01-01');
    } catch (error: any) {
      expect(error.message).toEqual(unexpectedErrorMessage);
    }
  });
});
