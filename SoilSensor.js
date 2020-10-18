const sensor = require('i2c-seesaw-moisture-sensor')
//create the client, provide i2c address
let client = sensor.open(0x36)
//read temperature
client.getTemperature()
  .then(console.log)
//read moisture
client.getMoisture()
  .then(console.log)