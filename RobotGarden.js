var sensor = require("node-dht-sensor");
var fs = require('fs');
var fileName = './RobotGardenData.json';
var file = require(fileName);
var fileName1 = './Humid.json';
var file1 = require(fileName1);

setInterval(function () {
    sensor.read(22, 4, function (err, temperature, humidity) {
        if (!err) {
            console.log(`temp: ${temperature}C, humidity: ${humidity}%`);
            file.push({
                y: Math.round(temperature * 100) / 100 
            });
            file1.push({
                y: Math.round(humidity * 100) / 100 
            });
        }
    });
    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
    });
    fs.writeFile(fileName1, JSON.stringify(file1), function (err) {
        if (err) return console.log(err);
    });
}, 90000);