import {fireEvent, render, waitFor} from '@testing-library/react-native';
import moment from 'moment';
import React from 'react';
import {ITimeSlot} from '../../interfaces/interface';
import {TimeSlot} from './time-slot';

const mockSlot: ITimeSlot = {
  Start: '2022-01-01T10:00:00',
  Taken: false,
  textColor: 'red',
};

const mockOnSlotPress = jest.fn();

describe('TimeSlot component', () => {
  it('renders the correct time', () => {
    const {getByText} = render(
      <TimeSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );
    const timeText = getByText(moment(mockSlot?.Start).format('HH:mm'));
    expect(timeText).toBeDefined();
  });

  it('renders a BookedSlot when the slot is taken', () => {
    const {getByTestId} = render(
      <TimeSlot
        slot={{...mockSlot, Taken: true}}
        onSlotPress={mockOnSlotPress}
      />,
    );
    const bookedSlot = getByTestId('bookedSlotID');
    expect(bookedSlot).toBeDefined();
  });

  it('renders a BookSlot when the slot is not taken', () => {
    const {getByTestId} = render(
      <TimeSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );
    const bookSlot = getByTestId('book-slot-buttonID');
    expect(bookSlot).toBeDefined();
  });

  it('calls onSlotPress when the slot is not taken and pressed', async () => {
    const {getByTestId} = render(
      <TimeSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );
    const bookSlot = getByTestId('book-slot-buttonID');
    fireEvent.press(bookSlot);
    await waitFor(() => expect(mockOnSlotPress).toHaveBeenCalledWith(mockSlot));
  });
});
