import express from 'express';
import { MongoClient } from 'mongodb';
import {moviesRouter} from "./moviesyntax.js";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

console.log(process.env);

const app = express();

app.use(express.json());
app.use(cors());

const PORT=process.env.PORT;

const mongo_url = process.env.mongo_url;

 async function createConnection() {
  const client = new MongoClient(mongo_url);
  await client.connect();
  console.log("mongodb connected");
  return client;
}
 
export const client = await createConnection();


app.get("/",  (request, response) =>{
    response.send("hello World")
});

app.use("/movies", moviesRouter);

app.listen(PORT,()=> console.log("the server is started", PORT))