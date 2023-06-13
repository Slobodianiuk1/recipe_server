import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema({
    userName: {type: String, require: true, unique: true},
    password: {type: String, require: true}
})

export const UsersModel = mongoose.model('Users', UsersSchema)