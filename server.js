import express from 'express';
import bodyParser from 'body-parser';
import toolRoutes from '../hardwareStore/routes/tools.js';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(cors());

app.use(bodyParser.json());

app.use('/tools', toolRoutes);

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
