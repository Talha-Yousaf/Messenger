import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
// import {useSelector} from 'react-redux';
import Loader from '../components/Loader';
import {OverlayProvider} from 'stream-chat-react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
export default function Routes() {
  // const isLogin = useSelector(state => state.Auth.isLogin);
  return (
    <NavigationContainer>
      <OverlayProvider>
      <Loader />
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
      </OverlayProvider>
    </NavigationContainer>
  );
}
