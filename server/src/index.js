import express from 'express';
import cors  from 'cors';
import env from './environments/environment.js';

const app = express();
app.use(cors());
app.use(express.json());

app.listen(env.PORT, () => console.log(`Server UP running on port ${env.PORT}`));