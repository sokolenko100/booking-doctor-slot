import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {updateDateRange} from '../../../../helpers';
import {styles} from './styles';

interface DateHeaderProps {
  monday: string;
  onPressPrevWeek: () => void;
  onPressNextWeek: () => void;
}

/**
 * DateHeader component for displaying and navigating between weeks.
 * It takes two callback functions as props: onPressPrevWeek and onPressNextWeek.
 * These functions are called when the user presses the previous or next week buttons.
 * The component also maintains the current date and updates it when the buttons are pressed.
 * @param onPressPrevWeek Callback function to be called when the previous week button is pressed.
 * @param onPressNextWeek Callback function to be called when the next week button is pressed.
 * @returns A React component that displays the current date and allows the user to navigate between weeks.
 */
const DateHeader: FC<DateHeaderProps> = ({
  onPressPrevWeek,
  onPressNextWeek,
  monday,
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onPressPrevWeek}>
        <Icon name="left" size={24} />
      </TouchableOpacity>
      <Text style={styles.dateRange}>{updateDateRange(monday)}</Text>
      <TouchableOpacity onPress={onPressNextWeek}>
        <Icon name="right" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default memo(DateHeader);
