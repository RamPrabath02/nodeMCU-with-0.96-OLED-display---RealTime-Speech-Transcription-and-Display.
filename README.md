
Project Title: Real-Time Voice Transcription and Display
Description
This project is a comprehensive solution that combines a mobile application and an ESP8266-based hardware setup to transcribe voice in real-time and display the transcription on an OLED screen. The mobile app, developed in React Native, captures voice input, transcribes it, and sends the transcription to the ESP8266 module over Wi-Fi. The ESP8266, equipped with a 0.96-inch OLED display, then shows the transcribed text, making it an innovative tool for real-time communication, especially in scenarios like smart glasses or assistive technology.

Features
Voice Transcription: Real-time voice to text conversion using React Native.
Wi-Fi Communication: Seamless transmission of transcribed text over Wi-Fi.
OLED Display: Clear and efficient display of text on a 0.96-inch OLED screen.
Expandable: Easily adaptable for additional languages and functionalities.
Installation
Mobile App
Start with:
npm install
Run the App:
bash
Copy code
npx react-native run-android
ESP8266 Setup - File Folder name: sketch_nov24a
Arduino IDE Setup: Ensure that the Arduino IDE is installed with ESP8266 support.
Load the Sketch: Open the provided Arduino sketch located in the ArduinoCode folder.
Configure Wi-Fi: Update the Wi-Fi credentials in the sketch to match your network.
Upload to ESP8266: Connect the ESP8266 to your computer and upload the sketch.
Usage
Start the Mobile App: Open the app on your mobile device.
Connect to ESP8266: Ensure both the mobile device and ESP8266 are on the same Wi-Fi network.
Start Transcribing: Use the app to capture voice and observe the transcription on the OLED display.
Contributing
Contributions to enhance the functionality, improve the UI/UX of the app, or extend the hardware capabilities are welcome. Please fork the repository and submit a pull request with your changes.

License
This project is licensed under the MIT License.

Acknowledgments
Thanks to the open-source community for the invaluable libraries and tools.
Special thanks to React Native and ESP8266 Arduino Core communities.
