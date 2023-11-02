import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { ContactDetailsScreenNavigationProp } from './RootStackParamList'; 

type Props = {
  navigation: ContactDetailsScreenNavigationProp;
};

const ContactDetailsScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Will Handle form submission logic (e.g., send data to server)
    console.log('Name:', name);
    console.log('Phone:', phone);
    console.log('Email:', email);
    // Will Add additional logic to save data or navigate to the next screen
    // For example, navigate to a confirmation screen:
    // navigation.navigate('ConfirmationScreen');
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text>Contact Details</Text>
      <TextInput placeholder="Name" value={name} onChangeText={(text) => setName(text)} style={{ marginVertical: 8 }} />
      <TextInput placeholder="Phone Number" value={phone} onChangeText={(text) => setPhone(text)} style={{ marginVertical: 8 }} />
      <TextInput placeholder="Email" value={email} onChangeText={(text) => setEmail(text)} style={{ marginVertical: 8 }} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default ContactDetailsScreen;
