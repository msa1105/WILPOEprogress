import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { CalculateTotalFeesScreenNavigationProp } from './RootStackParamList';
import Course from './Course';
import { shortCourses, sixMonthCourses } from './courseData';

type Props = {
  navigation: CalculateTotalFeesScreenNavigationProp;
};

const CalculateTotalFeesScreen: React.FC<Props> = ({ navigation }) => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);

  const toggleCourseSelection = (course: Course) => {
    const isSelected = selectedCourses.some((selectedCourse) => selectedCourse.id === course.id);
    if (isSelected) {
      setSelectedCourses(selectedCourses.filter((selectedCourse) => selectedCourse.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  const calculateTotalFees = () => {
    let totalFees = 0;
    selectedCourses.forEach((course) => {
      totalFees += course.fee;
    });
    return totalFees;
  };

  const renderCourseCheckbox = (course: Course) => (
    <View style={{ flexDirection: 'row', alignItems: 'center' }} key={course.id}>
      <CheckBox
        value={selectedCourses.some((selectedCourse) => selectedCourse.id === course.id)}
        onValueChange={() => toggleCourseSelection(course)}
      />
      <Text>{`${course.title} - R${course.fee}`}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Select Courses</Text>

      <Text>Short Courses:</Text>
      {shortCourses.map((course) => renderCourseCheckbox(course))}

      <Text>Six-Month Courses:</Text>
      {sixMonthCourses.map((course) => renderCourseCheckbox(course))}

      <Text>Total Fees: R{calculateTotalFees().toFixed(2)}</Text>
      <Button title="Next" onPress={() => navigation.navigate('ContactDetails')} />
    </View>
  );
};

export default CalculateTotalFeesScreen;
