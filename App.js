import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import* as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home';
import IssLocationScreen from './screens/IssLocation';
import MeteorScreen from './screens/Meteor';

const Stack = createStackNavigator();
function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown:false}} >
        <Stack.Screen name="home"component={HomeScreen}/>
        <Stack.Screen name="IssLocation"component={IssLocationScreen}/>
        <Stack.Screen name="Meteor"component={MeteorScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;