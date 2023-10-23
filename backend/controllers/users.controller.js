import User from "../models/user.models.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from 'bcryptjs';

export const test = (req, res) => {
    res.json({
        message: "API test routes",
    })
};

export const updateUser =  async (req, res, next) => {
    if(req.user.id !== req.params.id) 
      return next(errorHandler(401, "You can only update your own account"))
    try {
        if(req.body.password) {
            req.body.password = bcryptjs.hashSync(req.body.password, 14); 
        }

        const updatedUser = await User.findByIdAndUpdate(req.params.id, 
           {
            $set: {
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
                avatar: req.body.avatar,
            }
        }, {new: true})

        const {password, ...rest} = updatedUser._doc;

        res.status(200).json(rest)
    } catch (err) {
        next(err)
    }
}