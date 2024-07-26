import {ITimeSlot} from '../../interfaces/interface';
import {generateRandomHexColor, sortWeeklySlots} from '../sort-weekly-slots';

describe('generateRandomHexColor', () => {
  it('should return a hexadecimal color code with 6 characters', () => {
    const hexColor = generateRandomHexColor();
    expect(hexColor.length).toBe(7);
    expect(hexColor.startsWith('#')).toBe(true);
    const hexChars = '0123456789ABCDEF';
    for (let i = 0; i < 6; i++) {
      expect(hexChars.includes(hexColor[i + 1])).toBe(true);
    }
  });

  it('should not return the same hexadecimal color code twice', () => {
    const hexColors = [];
    for (let i = 0; i < 1000; i++) {
      const hexColor = generateRandomHexColor();
      if (hexColors.includes(hexColor)) {
        throw new Error('Duplicate hexadecimal color code found');
      }
      hexColors.push(hexColor);
    }
  });

  it('should return a different hexadecimal color code for each call', () => {
    const hexColors = [];
    for (let i = 0; i < 10; i++) {
      const hexColor1 = generateRandomHexColor();
      const hexColor2 = generateRandomHexColor();
      if (hexColor1 === hexColor2) {
        throw new Error('Same hexadecimal color code found');
      }
      hexColors.push(hexColor1, hexColor2);
    }
  });
});

describe('sortWeeklySlots', () => {
  const testData: ITimeSlot[] = [
    {Start: '2022-01-01T10:00:00', End: '2022-01-01T11:00:00', Taken: true},
    {Start: '2022-01-02T12:00:00', End: '2022-01-02T13:00:00', Taken: true},
    {Start: '2022-01-03T14:00:00', End: '2022-01-03T15:00:00', Taken: false},
    {Start: '2022-01-04T16:00:00', End: '2022-01-04T17:00:00', Taken: true},
  ];

  it('should correctly group time slots with only taken slots', async () => {
    const result = await sortWeeklySlots(testData);

    expect(result.length).toBe(4);
    expect(result[0].title).toBe('Saturday, 01 January');
    expect(result[0].data.length).toBe(1);
    expect(result[0].data[0].Taken).toBe(true);
    expect(result[0].data[0].textColor).toBeDefined();
    expect(result[1].title).toBe('Sunday, 02 January');
    expect(result[1].data.length).toBe(1);
    expect(result[1].data[0].Taken).toBe(true);
    expect(result[1].data[0].textColor).toBeDefined();
  });
});
