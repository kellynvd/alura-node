import * as dotenv from 'dotenv';
dotenv.config()

import mongoose from "mongoose";

mongoose.connect(`mongodb+srv://api-books:${process.env.DB_KEY}@api-books.ir8u7vf.mongodb.net/api-books`);

const db = mongoose.connection;

export default db;
