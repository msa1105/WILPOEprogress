// SixMonthCoursesScreen.tsx

import React from 'react';
import { View, Text } from 'react-native';
import type { SixMonthCoursesScreenNavigationProp } from './RootStackParamList';
import Course from './Course';

type Props = {
  navigation: SixMonthCoursesScreenNavigationProp;
  route: {
    params: {
      course: Course;
    };
  };
};

const SixMonthCoursesScreen: React.FC<Props> = ({ route }) => {
  const { course } = route.params;

  return (
    <View>
      <Text>{course.title}</Text>
      <Text>{course.fee}</Text>
      <Text>{course.purpose}</Text>
      <Text>{course.content.join('\n')}</Text> {/* Join content array elements into a string */}
    </View>
  );
};

export default SixMonthCoursesScreen;
