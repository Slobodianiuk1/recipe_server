import express from "express";
import  jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import {UsersModel} from "../modeles/Users.js";

const router = express.Router()

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
    const user = await UsersModel.findOne({ username });
    if (user) {
        return res.status(400).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UsersModel({ username, password: hashedPassword });
    await newUser.save();
    res.json({ message: "User registered successfully" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await UsersModel.findOne({ username });

    if (!user) {
        return res
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res
            .status(400)
            .json({ message: "Username or password is incorrect" });
    }

    const token = jwt.sign({ id: user._id }, "secret");
    res.json({ token, userID: user._id });
});

export {router as usersRouter}


