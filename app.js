import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import { notFound, errorHandler } from "./middlewares.js";
//import mongoose from 'mongoose'
import cors from 'cors';
import helmet from 'helmet';
import connectDB from "./config/db.js";
import volunteer from "./api/volunteerApi.js"


dotenv.config();
const app = express();


connectDB();
            
  app.use(morgan('common'));
  app.use(helmet());
  app.use(cors());

  app.use(express.json());

  app.use('/api/volunteer', volunteer);

  const port = process.env.PORT || 4000;
  
  
  app.use(express.json());
  
  app.get('/', (req, res) => {
      res.json({
          message: 'API IS RUNNING',
      })
  })
  
//   app.use('/api/logs', logs);
  
  app.use(notFound);
  app.use(errorHandler)
  
  
  app.listen(port, () => {
      console.log(`listening at http://localhost:${port}`);
  })
