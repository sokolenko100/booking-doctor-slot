import React, {FC, useLayoutEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {formatDatetime} from '../../helpers';
import {Header} from './components';
import {styles} from './styles';

export const Booking: FC = ({navigation, route}: any) => {
  const [fromData, setFromData] = useState('');
  const [toData, setToData] = useState('');
  const {slot} = route.params;

  const handleBooking = () => {};

  useLayoutEffect(() => {
    const start = formatDatetime(slot.Start);
    const end = formatDatetime(slot.End);
    setFromData(start);
    setToData(end);
  }, [slot]);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={styles.slotTimeContainer}>
          <Text style={styles.slotTime}>{`From: ${fromData}`}</Text>
          <Text style={styles.slotTime}>{`To:  ${toData}`}</Text>
        </View>
        <TouchableOpacity
          testID="ButtonID"
          onPress={handleBooking}
          style={styles.button}>
          <Text style={styles.label}>{'Book Slot'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
