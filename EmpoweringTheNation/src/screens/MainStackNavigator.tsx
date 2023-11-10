// MainStackNavigator.tsx

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ShortCoursesScreen from './ShortCoursesScreen';
import SixMonthCoursesScreen from './SixMonthCoursesScreen';
import CalculateTotalFeesScreen from './CalculateTotalFeesScreen';
import ContactDetailsScreen from './ContactDetailsScreen';
import type { StackScreenProps } from '@react-navigation/stack';
import { ShortCoursesScreenNavigationProp, SixMonthCoursesScreenNavigationProp } from './RootStackParamList';

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="ShortCourses"
        component={ShortCoursesScreen}
      />
      <Stack.Screen
        name="SixMonthCourses"
        component={SixMonthCoursesScreen}
      />
      <Stack.Screen
        name="CalculateTotalFees"
        component={CalculateTotalFeesScreen}
      />
      <Stack.Screen
        name="ContactDetails"
        component={ContactDetailsScreen}
      />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
