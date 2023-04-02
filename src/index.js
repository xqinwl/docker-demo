import express from "express";
import {db} from "./db.js";

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/users', async (req, res) => {
    res.send(await db.collection("users").find().toArray())
})

app.listen(3000, () => {
  console.log(`app is running.`)
});