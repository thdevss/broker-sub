const broker = require('./broker')

// TODO:: call MT4 API or something
const topic = process.argv[2] ?? 'main'
broker.subscribe(topic, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('subscribe on', topic)
    }
});
broker.on('message', function (topic, message) {
    console.log(new Date(), topic, message.toString());
});