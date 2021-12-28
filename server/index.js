// # region BK
// import express from "express";
// import cors from "cors";
// import fs from 'fs/promises';

// const app = express();
// app.use(express.json());
// app.use(cors());
// app.get('/api/latest',async (req, res) => {
//     const content = JSON.parse(await fs.readFile('./data/meta.json'))
//     res.status(200).json(content)
// });


// app.listen(3030, () => console.log('server is up!'));

const app = require("express")();
const httpServer = require("http").createServer(app);
const options = {};
const io = require("socket.io")(httpServer, options);

io.on("connection", socket => {
    console.log('connection established', { socket });
});
httpServer.listen(3030);