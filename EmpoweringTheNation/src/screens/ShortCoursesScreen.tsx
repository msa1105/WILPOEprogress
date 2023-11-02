import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { ShortCoursesScreenNavigationProp } from './RootStackParamList';

type Props = {
  navigation: ShortCoursesScreenNavigationProp;
};

const ShortCoursesScreen: React.FC<Props> = ({ navigation }) => {
  const shortCoursesData = [
    { id: '1', title: 'Child Minding', fee: 750 },
    // Will Add more short courses here
  ];

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Short Courses</Text>
      <FlatList
        data={shortCoursesData}
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

export default ShortCoursesScreen;
