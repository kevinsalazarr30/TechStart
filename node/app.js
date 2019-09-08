
const express = require('express');

const mongoose = require('mongoose');


const app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var socketC = require('./socket.js');
socketC.start(io);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const postRoute = require('./routes/post');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/Invoice', postRoute, function (res, req) {
    console.log('jejejejejje')
});



mongoose.connect(
    "mongodb+srv://kevin:123@cluster0-o7lwh.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true },
    () => {
        console.log('connected ready');
    })

server.listen(3001, function () {
});


//app.listen(3000);