// import "reflect-metadata"
import express from 'express';
// import dotenv from 'dotenv';
// import http from 'http';
// import amqp from 'amqplib';
//import { PrismaClient } from '@prisma/client';


// dotenv.config();
const app = express();

// const RABBIT = process.env.RABBIT;
const PORT = process.env.PORT || 80;
// const VIDEO_STORAGE_HOST = process.env.VIDEO_STORAGE_HOST;
// const VIDEO_STORAGE_PORT = process.env.VIDEO_STORAGE_PORT;
//const prisma = new PrismaClient();

app.use(express.json());

// app.post('/video/:path', async(req, res) => {
//     const path = req.params.path;
//     const newVideo = await prisma.video.create({
//         data: {
//             path: path
//         }
//     });
//     res.send(JSON.stringify(newVideo))
// });

// app.get('/videos', async(req, res) => {
//     const videos = await prisma.video.findMany();
//     res.send(JSON.stringify(videos))
// });


// app.get('/video/:id', async (req, res) => {
//     try {
//         const videoId = req.params.id;
//         const videoRecord = await prisma.video.findUnique({ where: { id: videoId }});

//         if(!videoRecord) {
//             res.sendStatus(404);
//             return;
//         }
//         const requestBody = {
//             host: VIDEO_STORAGE_HOST,
//             port: VIDEO_STORAGE_PORT,
//             path: `/video?path=${videoRecord.path}`,
//             method: 'GET',
//             headers: req.headers
//         };
//         const forwardRequest = http.request(requestBody, forwardResponse => {
//             res.writeHeader(forwardResponse.statusCode, forwardResponse.headers);
//             forwardResponse.pipe(res);
//         });
//         req.pipe(forwardRequest);
//     } catch(err) {
//         console.error('Database query failed.');
//         console.error(err && err.stack || err);
//         res.sendStatus(500);
//     }
// });

// app.get('/rabbit', async (req, res) => {
//     const rabbit = await amqp.connect(RABBIT);
//     const messageChannel = await rabbit.createChannel();

//     const msg = { message: 'que lindo' };
//     const jsonMsg = JSON.stringify(msg);

//     await messageChannel.publish('', 'viewed', Buffer.from(jsonMsg));
// });

app.get('/',  function(req, res) {
    res.send('hello from video-streaming microservice');
})

app.listen(PORT, () => {
    console.log(`app running in localhost:${PORT}`);
});