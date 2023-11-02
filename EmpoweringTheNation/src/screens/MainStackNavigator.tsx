
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import SixMonthCoursesScreen from './SixMonthCoursesScreen';
import ShortCoursesScreen from './ShortCoursesScreen';
import CalculateTotalFeesScreen from './CalculateTotalFeesScreen';
import ContactDetailsScreen from './ContactDetailsScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
      <Stack.Screen name="ShortCourses" component={ShortCoursesScreen} />
      <Stack.Screen name="CalculateTotalFees" component={CalculateTotalFeesScreen} />
      <Stack.Screen name="ContactDetails" component={ContactDetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
