import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import {usersRouter} from './routes/users.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", usersRouter)

mongoose.connect(
    'mongodb+srv://recipe:Qwerty123@recipe.ilwvt6x.mongodb.net/?retryWrites=true&w=majority'
)


app.listen(4200, () => console.log("server start!"))