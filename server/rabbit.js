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

var pubChannel = null;
var offlinePubQueue = [];

function startPublisher() {
    connection.createConfirmChannel(function(err, ch) {
        if (closeOnErr(err)) return;
        ch.on("error", function(err) {
            console.error("[AMQP] channel error", err.message);
        });
        ch.on("close", function() {
            console.log("[AMQP] channel closed");
        });

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
                    offlinePubQueue.push([exchange, routingKey, content]);
                    pubChannel.connection.close();
                }
            });
    } catch (e) {
        console.error("[AMQP] publish", e.message);
        offlinePubQueue.push([exchange, routingKey, content]);
    }
}