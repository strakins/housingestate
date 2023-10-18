import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js'

dotenv.config();

mongoose.connect(process.env.MONGDB_URI)
.then(() => {
    try {
        console.log('Mongodb Connected')
    } catch (err) {
        console.log(err)
    }
})

const app = express();
app.use(express.json())

app.listen(3000, ()=> {
    console.log(`Port Running on port 3000`);
})


app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);