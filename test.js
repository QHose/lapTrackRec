var sys = require('util');
var net = require('net');
var mqtt = require('mqtt');


var client = mqtt.connect('mqtt://192.168.2.12');

client.publish("device/trackRec/car01", "start");

for( i = 1; i < 11; i++){
    client.publish("device/trackRec/car01", "lap");
    console.log("publishing lap "+i);
}

//process.exit();