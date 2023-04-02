import {MongoClient} from "mongodb";

export const MONGODB_CONNECTION_STRING = process.env.MONGODB_CONNECTION_STRING;

export const client = new MongoClient(MONGODB_CONNECTION_STRING);
client.on("serverOpening", () => console.log("Mongo client connected"));

export const db = client.db();
