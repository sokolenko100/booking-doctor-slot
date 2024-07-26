import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface IBookedSlot {
  color?: string;
}

/**
 * A functional component representing a booked slot in a calendar or schedule.
 * It displays a view with a border and a text indicating that the slot is booked.
 *
 * @param {string} [color] - Optional color for the border and text. Defaults to black.
 * @returns {JSX.Element} - A React component representing a booked slot.
 */
export const BookedSlot: FC<IBookedSlot> = ({color}) => {
  return (
    <View
      testID={'bookedSlotID'}
      style={[styles.bookedSlot, {borderLeftColor: color}]}>
      <Text style={[styles.bookedText, {color: color}]}>Slot booked</Text>
    </View>
  );
};
