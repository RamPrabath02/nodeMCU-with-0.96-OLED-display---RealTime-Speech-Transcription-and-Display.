import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';
import axios from 'axios';

const TranscriptionScreen = () => {
  const [transcription, setTranscription] = useState('');
  const [isListening, setIsListening] = useState(false);

  
  const NODEMCU_IP = 'http://192.168.X.X'; //Replace with your wifi ip address

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechPartialResults = onSpeechPartialResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (e) {
      console.error(e);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onSpeechStart = () => {
    console.log('onSpeechStart');
  };

  const onSpeechEnd = () => {
    console.log('onSpeechEnd');
  };

  const onSpeechPartialResults = (e) => { 
    const partialTranscription = e.value[0];
    setTranscription(partialTranscription);
    sendOverWiFi(partialTranscription);
  };

  const sendOverWiFi = async (data) => {
    try {
      await axios.post(`${NODEMCU_IP}/transcribe`, { data });
      console.log('Data sent over Wi-Fi');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      
      <Text style={{ color: 'black', fontSize: 24 }}>Transcription: {transcription}</Text>
      <Text>WIFI</Text>
      <Button title={isListening ? 'Stop Transcription' : 'Start Transcription'} onPress={isListening ? stopListening : startListening} />
    </View>
  );
};

export default TranscriptionScreen;
