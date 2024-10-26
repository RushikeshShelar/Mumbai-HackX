import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import http from 'http';    
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';

import router from './router';


const app = express();  

app.use(cors({
    credentials: true,
    origin: "http://localhost:5173"
}));

app.use(compression());
app.use(bodyParser.json());
app.use(cookieParser());

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
    console.log('Server Running on http://localhost:8080');
});

const MONGO_URL = process.env.MONGODB_URL;
mongoose.Promise = Promise;

mongoose.connect(MONGO_URL)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

app.use('/', router());
