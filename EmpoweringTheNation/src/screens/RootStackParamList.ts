import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  SixMonthCourses: undefined;
  ShortCourses: undefined;
  CourseDetails: { course: Course }; //Will Define Course type according to your data structure
  CalculateTotalFees: undefined;
  ContactDetails: undefined;
};

export type SixMonthCoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SixMonthCourses'>;
export type ShortCoursesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ShortCourses'>;
export type CourseDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CourseDetails'>;
export type CalculateTotalFeesScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CalculateTotalFees'>;
export type ContactDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'ContactDetails'>;

export default RootStackParamList ;
