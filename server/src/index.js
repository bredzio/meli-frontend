import { Server } from './server.js';

try{
    const server = new Server();
    server.listen();
}catch(error){
    console.error(error);
}