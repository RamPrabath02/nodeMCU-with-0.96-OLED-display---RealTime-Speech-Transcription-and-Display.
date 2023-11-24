// // // import React, { useEffect, useState } from 'react';
// // // import { View, Text, Button, PermissionsAndroid } from 'react-native';
// // // import Voice from '@react-native-voice/voice';
// // // import BluetoothSerial from 'react-native-bluetooth-serial-next';
// // // import { Picker } from '@react-native-picker/picker';

// // // const TranslationScreen = () => {
// // //   const [transcription, setTranscription] = useState('');
// // //   const [isListening, setIsListening] = useState(false);
// // //   const [language, setLanguage] = useState('es'); 

// // //   useEffect(() => {
// // //     Voice.onSpeechStart = onSpeechStart;
// // //     Voice.onSpeechEnd = onSpeechEnd;
// // //     Voice.onSpeechResults = onSpeechResults;

// // //     return () => {
// // //       Voice.destroy().then(Voice.removeAllListeners);
// // //     };
// // //   }, []);

// // //   const startListening = async () => {
// // //     try {
// // //       await Voice.start('en-US');
// // //       setIsListening(true);
// // //     } catch (e) {
// // //       console.error(e);
// // //     }
// // //   };

// // //   const stopListening = async () => {
// // //     try {
// // //       await Voice.stop();
// // //       setIsListening(false);
// // //     } catch (e) {
// // //       console.error(e);
// // //     }
// // //   };

// // //   const onSpeechStart = () => {
// // //     console.log('onSpeechStart');
// // //   };

// // //   const onSpeechEnd = () => {
// // //     console.log('onSpeechEnd');
// // //   };

// // //   const onSpeechResults = (e) => {
// // //     setTranscription(e.value[0]);
// // //     translateAndSend(e.value[0]);
// // //   };

// // //   const translateAndSend = async (data) => {
    


    
// // //     const translatedText = await translateText(data, language);
// // //     sendOverBluetooth(translatedText);
// // //   };

// // //   const sendOverBluetooth = async (data) => {
// // //     try {
// // //       await BluetoothSerial.write(data);
// // //       console.log('Data sent over Bluetooth');
// // //     } catch (error) {
// // //       console.log(error);
// // //     }
// // //   };

// // //   return (
// // //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// // //       <Text style={{ color: 'black', fontSize: 20 }}>Translation: {transcription}</Text>
// // //       <Picker
// // //         selectedValue={language}
// // //         onValueChange={(itemValue) => setLanguage(itemValue)}
// // //       >
// // //         <Picker.Item label="Spanish" value="es" />
// // //         <Picker.Item label="Tamil" value="ta" />
// // //       </Picker>
// // //       <Button title={isListening ? 'Stop Translation' : 'Start Translation'} onPress={isListening ? stopListening : startListening} />
// // //     </View>
// // //   );
// // // };

// // // export default TranslationScreen;

// // import React, { useEffect, useState } from 'react';
// // import { View, Text, Button } from 'react-native';
// // import Voice from '@react-native-voice/voice';
// // import BluetoothSerial from 'react-native-bluetooth-serial-next';
// // import { Picker } from '@react-native-picker/picker';


// // const TranslationScreen = () => {
// //   const [transcription, setTranscription] = useState('');
// //   const [translatedText, setTranslatedText] = useState('');
// //   const [isListening, setIsListening] = useState(false);
// //   const [language, setLanguage] = useState('es'); // Default language Spanish

// //   // OpenAI API key (replace with your actual key)
// //   const OPENAI_API_KEY = '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';

// //   useEffect(() => {
// //     Voice.onSpeechStart = onSpeechStart;
// //     Voice.onSpeechEnd = onSpeechEnd;
// //     Voice.onSpeechResults = onSpeechResults;

// //     return () => {
// //       Voice.destroy().then(Voice.removeAllListeners);
// //     };
// //   }, []);

// //   const startListening = async () => {
// //     try {
// //       await Voice.start('en-US');
// //       setIsListening(true);
// //       setTranscription('');
// //       setTranslatedText('');
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };

// //   const stopListening = async () => {
// //     try {
// //       await Voice.stop();
// //       setIsListening(false);
// //     } catch (e) {
// //       console.error(e);
// //     }
// //   };

// //   const onSpeechStart = () => {
// //     console.log('onSpeechStart');
// //   };

// //   const onSpeechEnd = () => {
// //     console.log('onSpeechEnd');
// //   };

// //   const onSpeechResults = (e) => {
// //     setTranscription(e.value[0]);
// //     translateAndSend(e.value[0]);
// //   };

// //   const translateText = async (text, targetLanguage) => {
// //     const data = {
// //       prompt: `Translate this English text to ${targetLanguage}: "${text}"`,
// //       temperature: 0.5,
// //       max_tokens: 60,
// //     };

// //     const headers = {
// //       'Content-Type': 'application/json',
// //       'Authorization': `Bearer ${OPENAI_API_KEY}`,
// //     };

// //     try {
// //       const response = await axios.post(
// //         'https://api.openai.com/v1/engines/davinci-codex/completions',
// //         data,
// //         { headers }
// //       );
// //       const translation = response.data.choices[0].text.trim();
// //       return translation;
// //     } catch (error) {
// //       console.error('Error translating text:', error);
// //       throw error;
// //     }
// //   };

// //   const translateAndSend = async (data) => {
// //     try {
// //       const translation = await translateText(data, language);
// //       setTranslatedText(translation);
// //       await sendOverBluetooth(translation);
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   const sendOverBluetooth = async (data) => {
// //     try {
// //       await BluetoothSerial.write(data);
// //       console.log('Data sent over Bluetooth');
// //     } catch (error) {
// //       console.log(error);
// //     }
// //   };

// //   return (
// //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
// //       <Text style={{ color: 'black', fontSize: 20 }}>Transcription: {transcription}</Text>
// //       <Text style={{ color: 'blue', fontSize: 20 }}>Translation: {translatedText}</Text>
// //       <Picker
// //         selectedValue={language}
// //         style={{ height: 50, width: 150 }}
// //         onValueChange={(itemValue) => setLanguage(itemValue)}
// //         mode="dropdown"
// //       >
// //         <Picker.Item label="Spanish" value="es" />
// //         <Picker.Item label="French" value="fr" />
// //         <Picker.Item label="German" value="de" />
// //         <Picker.Item label="Italian" value="it" />
// //         <Picker.Item label="Japanese" value="ja" />
// //         {/* Add more languages as needed */}
// //       </Picker>
// //       <Button
// //         title={isListening ? 'Stop Translation' : 'Start Translation'}
// //         onPress={isListening ? stopListening : startListening}
// //       />
// //     </View>
// //   );
// // };

// // export default TranslationScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import Voice from '@react-native-voice/voice';
import BluetoothSerial from 'react-native-bluetooth-serial-next';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

const TranslationScreen = () => {
  const [transcription, setTranscription] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [language, setLanguage] = useState('es'); 

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechResults = onSpeechResults;

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

  const onSpeechResults = (e) => {
    setTranscription(e.value[0]);
    translateAndSend(e.value[0]);
  };

  const translateText = async (text, targetLang) => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/davinci-codex/completions', {
        prompt: `Translate the following English text to ${targetLang}: ${text}`,
        temperature: 0.3,
        max_tokens: 60,
      }, {
        headers: {
          'Authorization': `Bearer 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`
        }
      });
      
      return response.data.choices[0].text.trim();
    } catch (error) {
      console.error('Error translating text:', error);
      return '';
    }
  };
  

  const translateAndSend = async (data) => {
    const translation = await translateText(data, language);
    setTranslatedText(translation);
    sendOverBluetooth(translation);
  };

  const sendOverBluetooth = async (data) => {
    try {
      await BluetoothSerial.write(data);
      console.log('Data sent over Bluetooth');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 20 }}>Transcription: {transcription}</Text>
      <Text style={{ color: 'blue', fontSize: 20 }}>Translation: {translatedText}</Text>
      <Picker
        selectedValue={language}
        onValueChange={(itemValue) => setLanguage(itemValue)}
        style={{ height: 50, width: 150 }}
      >
       
        <Picker.Item label="Spanish" value="es" />
        <Picker.Item label="French" value="fr" />
        <Picker.Item label="German" value="de" />
        
      </Picker>
      <Button title={isListening ? 'Stop Translation' : 'Start Translation'} onPress={isListening ? stopListening : startListening} />
    </View>
  );
};

export default TranslationScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, Button } from 'react-native';
// import Voice from '@react-native-voice/voice';
// import BluetoothSerial from 'react-native-bluetooth-serial-next';
// import { Picker } from '@react-native-picker/picker';
// import axios from 'axios';

// const TranslationScreen = () => {
//   const [transcription, setTranscription] = useState('');
//   const [isListening, setIsListening] = useState(false);
//   const [language, setLanguage] = useState('es'); // Default language Spanish

//   useEffect(() => {
//     Voice.onSpeechStart = onSpeechStart;
//     Voice.onSpeechEnd = onSpeechEnd;
//     Voice.onSpeechResults = onSpeechResults;

//     return () => {
//       Voice.destroy().then(Voice.removeAllListeners);
//     };
//   }, []);

//   const startListening = async () => {
//     try {
//       await Voice.start('en-US');
//       setIsListening(true);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const stopListening = async () => {
//     try {
//       await Voice.stop();
//       setIsListening(false);
//     } catch (e) {
//       console.error(e);
//     }
//   };

//   const onSpeechStart = () => {
//     console.log('onSpeechStart');
//   };

//   const onSpeechEnd = () => {
//     console.log('onSpeechEnd');
//   };

//   const onSpeechResults = (e) => {
//     const text = e.value[0];
//     setTranscription(text);
//     translateAndSend(text);
//   };

//   const translateAndSend = async (text) => {
//     try {
//       const translatedText = await translateText(text, language);
//       sendOverBluetooth(translatedText);
//     } catch (error) {
//       console.error('Error translating text:', error);
//     }
//   };

//   const translateText = async (text, targetLanguage) => {
//     const engine = 'davinci-codex';
//     const prompt = `Translate the following English text to ${targetLanguage}: ${text}`;
    
//     try {
//       const response = await axios.post(`https://api.openai.com/v1/engines/${engine}/completions`, {
//         prompt: prompt,
//         temperature: 0.3,
//         max_tokens: 60
//       }, {
//         headers: {
//           'Authorization': `Bearer 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`, // Replace with your actual OpenAI API key
//           'Content-Type': 'application/json'
//         }
//       });

//       return response.data.choices[0].text.trim();
//     } catch (error) {
//       throw error;
//     }
//   };

//   const sendOverBluetooth = async (data) => {
//     try {
//       await BluetoothSerial.write(data);
//       console.log('Data sent over Bluetooth');
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text style={{ color: 'black', fontSize: 20 }}>Translation: {transcription}</Text>
//       <Picker
//         selectedValue={language}
//         onValueChange={(itemValue) => setLanguage(itemValue)}
//         style={{ height: 50, width: 150 }}
//       >
//         {/* Add Picker.Items for each language you want to support */}
//         <Picker.Item label="Spanish" value="es" />
//         {/* Add more <Picker.Item> elements here */}
//       </Picker>
//       <Button title={isListening ? 'Stop Translation' : 'Start Translation'} onPress={isListening ? stopListening : startListening} />
//     </View>
//   );
// };

// export default TranslationScreen;
