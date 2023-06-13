import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect(
    'mongodb+srv://recipe:Qwerty123@recipe.ilwvt6x.mongodb.net/recipe?retryWrites=true&w=majority'
)


app.listen(4200, () => console.log("server start!"))