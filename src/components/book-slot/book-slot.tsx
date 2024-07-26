import React, {FC, memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {ITimeSlot} from '../../interfaces/interface';
import {styles} from './styles';

interface BookSlotProps {
  slot: ITimeSlot;
  onSlotPress: (slot: ITimeSlot) => void;
}

/**
 * BookSlot component for booking a time slot.
 * @param {ITimeSlot} slot - The time slot object containing information about the slot.
 * @param {(slot: ITimeSlot) => void} onSlotPress - A callback function to handle the slot press event.
 * @returns {JSX.Element} - A TouchableOpacity component that, when pressed, triggers the onSlotPress function with the provided slot object.
 */
export const BookSlot: FC<BookSlotProps> = memo(({slot, onSlotPress}) => {
  return (
    <TouchableOpacity
      testID="book-slot-buttonID"
      onPress={() => onSlotPress(slot)}
      style={styles.bookSlotButton}>
      <Icon name="add" size={20} color="#007BFF" />
      <Text testID="book-slot-textID" style={styles.bookSlotText}>
        Book slot
      </Text>
    </TouchableOpacity>
  );
});
