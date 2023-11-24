#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>
#include <Wire.h>
#include "SSD1306.h" // Ensure you have the SSD1306 library installed

// OLED Display settings
#define OLED_SDA 5  // GPIO 5 = D1
#define OLED_SCL 4  // GPIO 4 = D2
#define OLED_ADDR 0x3c // Replace with your OLED's I2C address if different

SSD1306 display(OLED_ADDR, OLED_SDA, OLED_SCL);

const char* ssid = "Ram'sHotspot"; // Replace with your WiFi credentials
const char* password = "ram12345";

ESP8266WebServer server(80);

String currentMessage = ""; // Global variable to hold the current message
int startPosition = 0;
int textWidth;
int resetPosition;

void setup() {
  Serial.begin(115200);
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi. IP address: " + WiFi.localIP().toString());

  // Initialize the OLED display
  display.init();
  display.flipScreenVertically(); // Only if you need to flip the display
  display.clear();

  // Define server endpoint
  server.on("/transcribe", HTTP_POST, []() {
    if (server.hasArg("plain")) {
      currentMessage = server.arg("plain");
      Serial.println(currentMessage);
      displayMessage(currentMessage);
      server.send(200, "text/plain", "Message received");
    } else {
      server.send(400, "text/plain", "Bad Request");
    }
  });

  server.begin();
}

void loop() {
  server.handleClient();

  if (currentMessage != "") {
    scrollText(currentMessage);
  }

  delay(5); // Adjust the delay for scrolling speed
}

void displayMessage(String message) {
  // Calculate the width of the text and the reset position
  textWidth = display.getStringWidth(message);
  resetPosition = -textWidth;

  startPosition = display.getWidth(); // Reset text position for new message
}

void scrollText(const String& message) {
  display.clear();
  display.setFont(ArialMT_Plain_24);

  if (startPosition <= resetPosition) {
    startPosition = display.getWidth();
  }

  display.setTextAlignment(TEXT_ALIGN_LEFT);
  display.drawString(startPosition, 0, message);
  display.display();

  startPosition--; // Move text to the left
}
