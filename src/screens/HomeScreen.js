import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Text>Home Screen</Text>
      <Button title="Go to Transcription" onPress={() => navigation.navigate('Transcription')} />
      <Button title="Go to Translation" onPress={() => navigation.navigate('Translation')} />
      <Button title="Go to AIFeatures" onPress={() => navigation.navigate('AIFeatures')} />
      
    </View>
  );
};

export default HomeScreen;