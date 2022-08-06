import express from 'express';
import cors  from 'cors';
import env from './environments/environment.js';
import itemRoutes from './core/features/items/routes/ItemRoutes.js';
import {authorMiddleware} from './core/middlewares/AuthorMiddleware.js';

export class Server {
    constructor() {
        this.app  = express();
        this.port = env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(authorMiddleware);
    }

    routes() {
        this.app.use( '/api', itemRoutes);
    }

    listen() {
        this.app.listen(env.PORT, () => console.log(`Server UP running on port ${env.PORT}`));
    }

}