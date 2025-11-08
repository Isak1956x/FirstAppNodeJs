import serverHandler from './Routes/route.js';
import http from 'http';

const server = http.createServer(serverHandler);

server.listen(8080);