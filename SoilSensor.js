const sensor = require('i2c-seesaw-moisture-sensor');
var fs = require('fs');
var fileName = './MoistureData.json';
var file = require(fileName);
//create the client, provide i2c address
let client = sensor.open(0x36)

//read temperature
//setInterval(function () {
//  client.getTemperature()
//    .then(console.log)
//}, 90000);

setInterval(function () {
  client.getMoisture().then(
    (result) => {
      file.push({y:result
      })
  })
  fs.writeFile(fileName, JSON.stringify(file), function (err) {
    if (err) return console.log(err);
  });
}, 90000);