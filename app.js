// express config
const express = require('express');
require('dotenv').config();
const app = express();

// config socket
const {Server: ServerHttp} = require('http');
const {Server: ServerIo} = require('socket.io');

const http = new ServerHttp(app);
const io = new ServerIo(http);

// VIEWS
app.use('/static', express.static('views'))
app.set('views', './views');
app.set('view engine', 'ejs');

// ROUTERS
const indexRouter = require('./src/routers/index')
app.use('/api', indexRouter);

// HEALTH

app.get('/health', (_req, res) => {
    res.status(200).json({
        success: 'True',
        health: 'Up',
        environment: process.env.ENVIRONMENT || 'undefined'
    })
})

// HANDSHAKE

io.on('connection', socket => {
    console.info(`Nuevo cliente online id:${socket.id}`)
    socket.emit('HEALTH', {health: process.env.HEALTH})
})

// EXPORT

module.exports = http