const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

require('dotenv').config();

// console.log(process.env.API_URL);