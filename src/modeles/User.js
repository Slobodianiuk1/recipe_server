import mongoose, {models} from "mongoose";

const UserSchema = new mongoose.Schema({
    userName: {type: String, require: true, unique: true},
    password: {type: String, require: true}
})

export const UserModel = models.User || mongoose.model('User', UserSchema)