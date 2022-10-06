import express from 'express';
import amqp from 'amqplib';

const app = express();
const PORT = process.env.PORT;
const RABBIT = process.env.RABBIT;

app.listen(PORT, async () => {
    console.log(`app running in localhost:${PORT}`);
    const rabbit = await amqp.connect(RABBIT);
    const messageChannel = await rabbit.createChannel();

    function consumeViewedMessage(msg) { // Handler for coming messages.
        const parsedMsg = JSON.parse(msg.content.toString()); // Parse the JSON message.
        console.log('Received a "viewed" message: ', parsedMsg);
        messageChannel.ack(msg);
    };

    await messageChannel.assertQueue('viewed', {});
    messageChannel.consume('viewed', consumeViewedMessage);
});
