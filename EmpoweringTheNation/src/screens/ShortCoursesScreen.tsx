// ShortCoursesScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import type { ShortCoursesScreenNavigationProp } from './RootStackParamList';
import Course from './Course';

type Props = {
  navigation: ShortCoursesScreenNavigationProp;
  route: {
    params: {
      course: Course;
    };
  };
};

const ShortCoursesScreen: React.FC<Props> = ({ route }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.fee}</Text>
      <Text>{course.purpose}</Text> 
      <Text>{course.content}</Text> 
    </View>
  );
};

export default ShortCoursesScreen;
