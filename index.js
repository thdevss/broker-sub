require('dotenv').config();
const broker = require('./broker')

// TODO:: call MT4 API or something
broker.on('message', function (topic, message) {
    console.log(topic, message.toString());
});