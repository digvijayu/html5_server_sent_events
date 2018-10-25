import {
  PORT
} from './config';

import express from 'express';
import http from 'http';
import SSE from 'sse';

var app = express();
const server = http.createServer(app);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client/index.html');
});

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
    var sse = new SSE(server);
    sse.on('connection', function(client) {
      setInterval(() => {
        // send an event in every 500 seconds
        client.send('hi there!');
      }, 500)
    });
  });
