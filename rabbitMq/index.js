var amqp = require("amqplib/callback_api");

let ch = null;
amqp.connect("amqp://localhost", function(err, conn) {
  conn.createChannel(function(err, channel) {
    ch = channel;
  });
});

const publishToQueue = async (queueName, data) => {
  ch.sendToQueue(queueName, new Buffer(data));
};

process.on("exit", code => {
  ch.close();
  console.log(`Closing rabbit mq channel`);
});

module.exports = { publishToQueue };
