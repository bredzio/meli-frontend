import express from 'express';
import cors  from 'cors';
import env from './environments/environment.js';
import itemRoutes from './core/features/items/routes/ItemRoutes.js';
import { authorMiddleware } from './core/middlewares/AuthorMiddleware.js';
import { errorMiddleware } from './core/middlewares/ErrorMiddleware.js';

export class Server {
    constructor() {
        this.app  = express();
        this.port = process.env.PORT || env.PORT;

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(authorMiddleware);
        this.app.use(errorMiddleware);
    }

    routes() {
        this.app.get('/', (_,res)=> res.status(200).json({
            message:'Mercado Libre Api Rest'
        }));
        this.app.use( '/api', itemRoutes);
        this.app.use('/*', (_, res) => res.status(404).json({
            error: true,
            message: 'Error: Endpoint not found'
        }));

        
    }

    listen() {
        this.app.listen(this.port, () => console.log(`Server UP running on port ${this.port}`));
    }

}