import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import toolRouter from './routes/tools.js';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
// dotenv.config();

app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

app.use('/tools', toolRouter);

const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });

const con = mongoose.connection;

con.on('open', function () {
  console.log('connected');
});

app.get('/', (req, res) => res.send('API Running'));
