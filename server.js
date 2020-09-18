const express = require('express')
const app = express()
var mqtt = require('mqtt')
const port = 3000
const fs = require("fs")
var path = require('path');
var client = mqtt.connect('tcp://192.168.137.1:1883')
var clientpub = mqtt.connect('ws://192.168.137.1:9001')


client.on('connect', function(){
    client.subscribe("/sensor/potensio",{qos:1});
    console.log("Client Has subscribe to MQTT broker")
});


client.on('message', function (topic, message){
    console.log(message.toString()); //if toString is not given, the message comes as buffer
    clientpub.publish('sensor/suhu',message.toString(), {qos:1});
  });

app.use(express.urlencoded({ extended: true }))

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});


app.get('/browserMQTT.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/browserMQTT.js'));
});

app.get('/subscribe.js', function (req, res) {
    res.sendFile(path.join(__dirname + '/subscribe.js'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))