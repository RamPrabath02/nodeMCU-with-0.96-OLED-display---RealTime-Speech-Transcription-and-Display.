import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TranscriptionScreen from './screens/TranscriptionScreen';
import TranslationScreen from './screens/TranslationScreen';
import AIFeaturesScreen from './screens/AIFeaturesScreen';


const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Transcription" component={TranscriptionScreen} />
        <Stack.Screen name="Translation" component={TranslationScreen} />
        <Stack.Screen name="AIFeatures" component={AIFeaturesScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;