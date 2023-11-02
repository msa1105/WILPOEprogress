import React, { useState } from 'react';
import { View, Text, Button, CheckBox } from 'react-native';
import { CalculateTotalFeesScreenNavigationProp } from './RootStackParamList';

type Props = {
  navigation: CalculateTotalFeesScreenNavigationProp;
};

const CalculateTotalFeesScreen: React.FC<Props> = ({ navigation }) => {
  const [courses, setCourses] = useState({
    firstAid: false,
    // Will Add more course checkboxes here
  });

  const courseFees = {
    firstAid: 1500,
    // Will Add corresponding fees for other courses here
  };

  const calculateTotalFees = () => {
    let totalFees = 0;
    for (const course in courses) {
      if (courses[course]) {
        totalFees += courseFees[course];
      }
    }
    return totalFees;
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Select Courses</Text>
      <View style={{ marginVertical: 8 }}>
        <CheckBox value={courses.firstAid} onValueChange={() => setCourses({ ...courses, firstAid: !courses.firstAid })} />
        <Text>First Aid - R1500</Text>
      </View>
      {/* Add more course checkboxes here */}
      <Text>Total Fees: R{calculateTotalFees()}</Text>
      <Button title="Next" onPress={() => navigation.navigate('ContactDetails')} />
    </View>
  );
};

export default CalculateTotalFeesScreen;
