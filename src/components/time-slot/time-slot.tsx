import moment from 'moment';
import React, {FC, memo} from 'react';
import {Text, View} from 'react-native';
import {BookedSlot, BookSlot} from '../';
import {ITimeSlot} from '../../interfaces/interface';
import {styles} from './styles';

interface SlotProps {
  slot: ITimeSlot;
  onSlotPress: (slot: ITimeSlot) => void;
}

/**
 * TimeSlot component represents a single time slot in the calendar.
 * It displays the time and its status (booked or available) and allows the user to interact with it.
 *
 * @param {ITimeSlot} slot - The time slot object containing information about the time, its status, and other details.
 * @param {(slot: ITimeSlot) => void} onSlotPress - A callback function to be called when the user interacts with the time slot.
 *
 * @returns {JSX.Element} - A JSX element representing the time slot component.
 */
export const TimeSlot: FC<SlotProps> = memo(({slot, onSlotPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.timeContainer}>
        <Text style={styles.time}>{moment(slot?.Start).format('HH:mm')}</Text>
      </View>
      {slot.Taken ? (
        <BookedSlot color={slot.textColor} />
      ) : (
        <BookSlot onSlotPress={onSlotPress} slot={slot} />
      )}
    </View>
  );
});
