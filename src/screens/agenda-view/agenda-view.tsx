import React, {FC, useCallback, useEffect, useState} from 'react';
import {SectionList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TimeSlot} from '../../components';
import {LoadingDots} from '../../components/loading-dots';
import {SectionHeader} from '../../components/section-header';
import {SCREEN} from '../../constants';
import {
  getDiferentMonday,
  getMonday,
  isSameOrBefore,
  sortWeeklySlots,
} from '../../helpers';
import {delay} from '../../helpers/common';
import {ITimeSlot} from '../../interfaces/interface';
import {getWeeklySlots} from '../../services';
import DateHeader from './components/header/header';
import {styles} from './styles';

/**
 * This component represents the AgendaView, which displays a list of time slots for booking appointments.
 * It fetches the weekly time slots based on the current Monday and renders them in a SectionList component.
 * The user can navigate to the booking screen by pressing a time slot.
 * @param {Object} navigation - React Navigation navigation prop.
 * @returns {JSX.Element} - JSX element representing the AgendaView component.
 */
let monday = '';
let currentMonday = '';

export const AgendaView: FC = ({navigation}: any) => {
  const [weeklySlots, setWeeklySlots] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Fetches the weekly time slots based on the provided startOfWeek date.
   * It calls the `getWeeklySlots` service to fetch the time slots and then sorts them using the `sortWeeklySlots` helper.
   * The sorted time slots are then stored in the `weeklySlots` state.
   * @param {string} startOfWeek - The date representing the start of the week for which the time slots should be fetched.
   * @returns {void} - This function does not return any value explicitly. It updates the `weeklySlots` state with the fetched and sorted time slots.
   * @memberof AgendaView
   * @see getWeeklySlots
   * @see sortWeeklySlots
   */
  const fetchSlots = useCallback(async (startOfWeek: string) => {
    try {
      const slots = await getWeeklySlots(startOfWeek);
      const sortSlots = await sortWeeklySlots(slots);
      setWeeklySlots(sortSlots);
      delay(() => setIsLoading(false), 2000);
    } catch (error) {
      console.error(error);
    }
  }, []);

  /**
   * This useEffect hook is responsible for fetching the weekly time slots and updating the UI when the component mounts.
   */
  useEffect(() => {
    monday = getMonday();
    currentMonday = monday;
    fetchSlots(monday);
  }, [fetchSlots]);

  /**
   * This function handles the press event for the "Next Week" button.
   * It updates the UI by fetching the weekly time slots for the next week.
   * @memberof AgendaView
   */
  const onPressNextWeek = useCallback(() => {
    setIsLoading(true);
    monday = getDiferentMonday(monday, 8);
    fetchSlots(monday);
  }, [fetchSlots]);

  /**
   * This function handles the press event for the "Prev Week" button.
   * It updates the UI by fetching the weekly time slots for the previous week.
   * @param {string} monday - The date representing the start of the current week.
   * @param {number} offset - The number of days to move back from the current Monday.
   * @returns {void} - This function does not return any value explicitly. It updates the UI by fetching the weekly time slots for the previous week.
   * @memberof AgendaView
   */
  const onPressPrevWeek = useCallback(() => {
    const prevMonday = getDiferentMonday(monday, -6);
    const isBefore = isSameOrBefore(currentMonday, prevMonday);

    if (isBefore) {
      monday = prevMonday;
      setIsLoading(true);
      fetchSlots(monday);
    }
  }, [fetchSlots]);

  /**
   * This function handles the press event for a time slot.
   * It navigates the user to the booking screen by passing the selected time slot as a parameter.
   * @param {ITimeSlot} slot - The time slot object containing the slot details.
   * @memberof AgendaView
   */
  const handleSlotPress = useCallback(
    (slot: ITimeSlot) => {
      navigation.navigate(SCREEN.BOOKING, {slot});
    },
    [navigation],
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <LoadingDots />
        </View>
      ) : (
        <View style={styles.container}>
          <DateHeader
            monday={monday}
            onPressPrevWeek={onPressPrevWeek}
            onPressNextWeek={onPressNextWeek}
          />
          <SectionList
            refreshing={true}
            renderItem={({item}) => (
              <TimeSlot slot={item} onSlotPress={handleSlotPress} />
            )}
            renderSectionHeader={({section: {title}}) => (
              <SectionHeader title={title} />
            )}
            sections={weeklySlots}
            keyExtractor={(item, index) => item + index}
            stickySectionHeadersEnabled={false}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
