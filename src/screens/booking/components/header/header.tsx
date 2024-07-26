import React, {FC, memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {styles} from './styles';

interface HeaderProps {
  navigation: any;
}

/**
 * Header component for navigation.
 *
 * @param {FC<HeaderProps>} HeaderProps - Props for the Header component.
 * @param {any} HeaderProps.navigation - React Navigation's navigation prop.
 *
 * @returns {JSX.Element} - A JSX element representing the Header component.
 */
export const Header: FC<HeaderProps> = memo(({navigation}) => {
  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.goBackTextContainer} onPress={handleBack}>
        <Icon name="left" size={24} />
      </TouchableOpacity>
      <Text style={styles.goBackText}>{'Go back'}</Text>
    </View>
  );
});
