
 //var mqtt = require('mqtt')
var client  = mqtt.connect('ws://192.168.137.1:9001')
 
client.on('connect', function(){
    client.subscribe("/sensor/potensio",{qos:1});
    console.log("Client Has subscribe to MQTT broker")
});


client.on('message', function (topic, message){
    console.log(message.toString()); //if toString is not given, the message comes as buffer
    document.getElementById("potensiometer").innerHTML = message.toString();
  });