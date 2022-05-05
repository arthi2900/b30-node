import express from 'express';
import cors from "cors";
import { MongoClient } from 'mongodb';
import { moviesRouter } from './routes/movies.js';
import { usersRouter } from './routes/users.js';
import dotenv from 'dotenv';

 dotenv.config();
console.log(process.env.MONGO_URL);
const app = express();
const   PORT=process.env.PORT;
app.use(express.json());
const MONGO_URL = process.env.MONGO_URL;
async function createConnection()
 {const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected ✌️😊");
  return client;}
  export const client = await createConnection();
app.get('/', function (req, res) {
  res.send('Hello Worldggg')
})

app.use(cors());
app.use('/movies',moviesRouter);
app.use('/users',usersRouter);
app.listen(PORT,function()
{console.log('server start from PORT 4000')});


