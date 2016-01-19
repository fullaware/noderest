# noderest
[NodeJS](https://nodejs.org/) + [Restify](http://restify.com/) to provide simple collection of data to flat file.  
Created to collect sensor data from Arduino and ESP8266 based IoT devices.

This will literally take anything after /log/ and put it in a file.  

## How to use it
`http://localhost:8080/log/{"temp":68.45,"sensor":"ds18b20","sensorid":231}`

Saves to `sensorlog.json`  
`{"temp":68.45,"sensor":"ds18b20","sensorid":231}`
