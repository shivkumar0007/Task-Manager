import userModel from "../model/model.user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userRegisterController = async (req, res) => {
  const { email, name, password } = req.body;

 try{ if (!email || !name || !password) {
    return res.status(400).json({
      message: "all field requred",
      status: "false",
    });
  }

  const isExist = await userModel.findOne({
    email: email,
  });

  if (isExist) {
    return res.status(422).json({
      message: "Email already exist",
      status: "false",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    email,
    name,
    password: hashPassword,
  });

const token = jwt.sign({id: user._id},process.env.JWT_SECRET,{expiresIn:"1d"});

res.cookie("token",token,{ maxAge: 24 * 60 * 60 * 1000});

res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });}catch(error){
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }


};

export default { userRegisterController };
