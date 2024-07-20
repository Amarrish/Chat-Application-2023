import dotenv from 'dotenv';
dotenv.config();
import cookieParser from 'cookie-parser';  
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import './DB/connection.js';
import { server, app } from './Socket/socket.js';
// const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser()); 
app.use(userRoutes);

const PORT = 5000;
server.listen(PORT, () => {
  console.log('Listening on port', PORT);
});



