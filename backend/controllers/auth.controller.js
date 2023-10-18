import User from "../models/user.models.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 14); // Salt value is 14... total round off value for password encryptio
    const newUser = new User({username, email, password: hashedPassword})
    try {
        await newUser.save();
        res.status(201).json("User created successfully")
    } catch (err) {
        res.status(500).json(err.message)
    }
};;
