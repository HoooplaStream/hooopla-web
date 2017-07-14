connection.on('error', function(e) {
    console.log("Une erreur s'est produite avec AMQP Rabbit: ", e);
});

connection.on('ready', function () {
    connection.queue('cseries_web', function (q) {
        q.bind('#');

        q.subscribe(function (message) {
            console.log(message);
        });
    });
});

Meteor.methods({

});

amqp = require('amqp');
var connection = amqp.createConnection(rabbitOptions);

var pubChannel = null;
var offlinePubQueue = [];

function startPublisher() {
    connection.createConnection(function(err, ch) {
        pubChannel = ch;
        while (true) {
            var m = offlinePubQueue.shift();
            if (!m) break;
            publish(m[0], m[1], m[2]);
        }
    });
}

function publish(content) {
    try {
        pubChannel.publish('main', 'CSERIES_CI', content, { persistent: true },
            function(err, ok) {
                if (err) {
                    console.error("[AMQP] publish", err);
                    offlinePubQueue.push(['main', 'CSERIES_CI', content]);
                    pubChannel.connection.close();
                }
            });
    } catch (e) {
        console.error("[AMQP] publish", e.message);
        offlinePubQueue.push(['main', 'CSERIES_CI', content]);
    }
}

RabbitMQ.on('ready', function () {
    RabbitMQ.connection.exchange('Project.E.MyExchange', {type: 'topic'}, function (exchange) {
        RabbitMQ.exchanges.MyExchange = exchange;
        RabbitMQ.emit('MyExchange is ready');
    });
});


RabbitMQ.on('MyExchange is ready', function () {
    RabbitMQ.exchanges.MyExchange.publish('CSERIES_CI', {greeting: 'Hello world!'});
    RabbitMQ.connection.queue('Project.Q.MyQueue', function (q) {
        q.bind(RabbitMQ.exchanges.MyExchange, function (q) {
            q.subscribe({ack: true}, function (message) {

                // your code for handling incoming messages goes here ...

                q.shift(); // Only necessary if {ack: true}
            });
        });
    });
})