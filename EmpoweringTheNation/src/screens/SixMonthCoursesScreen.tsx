import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { SixMonthCoursesScreenNavigationProp } from './RootStackParamList';

type Props = {
  navigation: SixMonthCoursesScreenNavigationProp;
};

const SixMonthCoursesScreen: React.FC<Props> = ({ navigation }) => {
  const sixMonthCoursesData = [
    { id: '1', title: 'First Aid', fee: 1500 },
    // Will Add more six-month courses here
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Six-Month Courses</Text>
      <FlatList
        data={sixMonthCoursesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('CourseDetails', { course: item })}>
            <View style={{ marginVertical: 8 }}>
              <Text>{item.title}</Text>
              <Text>Fee: R{item.fee}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SixMonthCoursesScreen;
