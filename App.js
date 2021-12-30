import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import home from './screens/Home';
import favoris from './screens/favoris';
import login from './screens/Login';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomNavigator = () => {
  return(
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="favoris" component={favoris}/>
        <Tab.Screen name="home" component={home}/>
      </Tab.Navigator>
    
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >
        <Stack.Screen name="login" component={login}/>
        <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
