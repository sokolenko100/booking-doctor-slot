import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {BookSlot} from './book-slot';

const mockSlot = {
  id: '1',
  Start: '09:00',
  End: '10:00',
  textColor: 'blue',
};

const mockOnSlotPress = jest.fn();

describe('BookSlot component', () => {
  it('renders with text Book slote', () => {
    const {getByText} = render(
      <BookSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );

    expect(getByText('Book slot')).toBeTruthy();
  });

  it('calls onSlotPress function when TouchableOpacity is pressed', () => {
    const {getByTestId} = render(
      <BookSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );

    fireEvent.press(getByTestId('book-slot-buttonID'));
    expect(mockOnSlotPress).toHaveBeenCalledWith(mockSlot);
  });
  it('matches the snapshot', async () => {
    const output = render(
      <BookSlot slot={mockSlot} onSlotPress={mockOnSlotPress} />,
    );

    expect(output).toMatchSnapshot();
  });
});
