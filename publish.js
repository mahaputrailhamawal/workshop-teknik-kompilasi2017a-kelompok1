var mqtt = require('mqtt')
var client  = mqtt.connect('tcp://192.168.137.1:1883')
 
client.on('connect', function(){
  setInterval(function(){
    var humid = Math.floor((Math.random() * 255)+1);
    client.publish('/sensor/potensio',humid.toString(), {qos:1});
  },1000); 
});