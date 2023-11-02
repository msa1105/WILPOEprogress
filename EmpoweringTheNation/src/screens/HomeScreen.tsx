import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import type  RootStackParamList  from './RootStackParamList';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<{ navigation: StackNavigationProp<RootStackParamList, 'Home'> }> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Empowering the Nation!</Text>
      <Button title="Six-Month Courses" onPress={() => navigation.navigate('SixMonthCourses')} />
      <Button title="Short Courses" onPress={() => navigation.navigate('ShortCourses')} />
    </View>
  );
};

export default HomeScreen;
