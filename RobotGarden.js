var sensor = require("node-dht-sensor");
var fs = require('fs');
var fileName = './RobotGardenData.json';
var file = require(fileName);

setInterval(function () {
    sensor.read(22, 4, function (err, temperature, humidity) {
        if (!err) {
            console.log(`temp: ${temperature}C, humidity: ${humidity}%`);
            file.push({
                Temp: temperature,
                Humidity: humidity
            });
        }
    });
    fs.writeFile(fileName, JSON.stringify(file), function (err) {
        if (err) return console.log(err);
    });
}, 3000);