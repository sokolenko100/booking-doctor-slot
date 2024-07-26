import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  goBackTextContainer: {
    backgroundColor: '#eeeeee',
    height: 32,
    width: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginRight: 10,
  },
  goBackText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000000',
  },
});
