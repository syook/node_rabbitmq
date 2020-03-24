var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function(error0, connection) {
  if (error0) throw error0;

  try {
    const channel = connection.createChannel();

    var queue = "hello";
    var msg = "Hello World!";

    channel.assertQueue(queue, { durable: false });

    channel.sendToQueue(queue, Buffer.from(msg));

    console.log(" [x] Sent %s", msg);
  } catch (error1) {
    throw error1;
  }

  setTimeout(function() {
    connection.close();
    process.exit(0);
  }, 500);
});
