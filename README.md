# noderest
NodeJS + Restify to provide simple collection of data to flat file.  
Created to collect sensor data from Arduino and ESP8266 based IoT devices.

This will literally take anything after /log/ and put it in a file.  

## How to use it
`http://localhost:8080/log/temp,45,hum,62,amb,88`

Saves to test.csv  
`temp,45,hum,62,amb,88`
