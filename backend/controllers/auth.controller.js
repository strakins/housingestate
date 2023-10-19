import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { errorHandler } from './../utils/error.js';
import  jwt  from "jsonwebtoken";


// Signup
export const signup = async (req, res, next) => {
    const {username, email, password} = req.body;
    const hashedPassword = bcrypt.hashSync(password, 14); // Salt value is 14... total round off value for password encryptio
    const newUser = new User({username, email, password: hashedPassword})
    try {
        await newUser.save();
        res.status(201).json("User created successfully")
    } catch (err) {
        next(err)
    }
};


// Signin
export const login = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const validUser = await User.findOne({ email });
        if(!validUser) return next(errorHandler(404, 'User not found'));
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if(!validPassword) return next(errorHandler(401, 'Invalid Credentials'))
        const token = jwt.sign({id: validUser._id}, process.env.JWT_SECRET)
        const { password: pass, ...rest } = validUser._doc
        res
          .cookie('access_token', token, { httpOnly: true })
          .status(200)
          .json(rest);
    } catch (err) {
        next(err)
    }
}
