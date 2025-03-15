import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/index.js';


dotenv.config();
const app = express();



const PORT = process.env.PORT;
const URL_DB = process.env.URL_MONGODB;
connect(URL_DB);
app.use(express.json());

app.use("/v1/api", router)
app.listen(PORT,()=>{
    console.log(`Server running on port: ${PORT}`);
    
} )