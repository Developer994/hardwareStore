import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import toolRoutes from '../hardwareStore/routes/tools.js';
import cors from 'cors';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/tools', toolRoutes);

const CONNECTION_URL =
  'mongodb+srv://Rezonator:Rezonator123@cluster0.mzep7.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 4000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
  )
  .catch((error) => console.log(error.message));

const con = mongoose.connection;

con.on('open', function () {
  console.log('connected');
});

app.get('/', (req, res) => res.send('API Running'));
