var amqp = require("amqplib/callback_api");

const subscribe = msg => {
  console.log("subscribe -> msg", msg.content.toString());
};

amqp.connect("amqp://localhost", function(err, conn) {
  conn.createChannel(function(err, ch) {
    ch.assertQueue("userEmit", { durable: false });

    ch.consume("userEmit", subscribe, { noAck: false });
  });
});
