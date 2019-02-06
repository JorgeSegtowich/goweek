const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//WEBSOCKET
const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://goweek:goweek123@ds221405.mlab.com:21405/goweek-jorgenelson', {
    useNewUrlParser: true
});

// app.get('/', (req, res) => {
//     return res.send('Hello World');
// });

app.use((req, res, next) => {
    req.io = io;

    return next();
});

// serve pra liberar acesso fora 
// da aplicao no caso um navegador
app.use(cors());

app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log(':) Server started on port 3000');
});