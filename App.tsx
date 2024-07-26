import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SCREEN} from './src/constants/navigation';
import {AgendaView, Booking} from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={SCREEN.AGENDA}>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={SCREEN.AGENDA}
            component={AgendaView}
          />
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name={SCREEN.BOOKING}
            component={Booking}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
