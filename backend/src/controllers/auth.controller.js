import userModel from "../models/user.model";
import jwt from "jsonwebtoken";
import Cookies from "cookies";

async function userRegister(req, res) {
  const { email, password, userName } = req.body;
  const isUserExist = await userModel.findOne({
    $or: [{ email }, { userName }],
  });
  if (isUserExist) {
    return res.status(409).json({ message: "User already exists" });
  }

  const user = await userModel.create({ email, password, userName });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.cookie("token", token);

  res
    .status(201)
    .json({
      message: "User registered successfully",
      user: { email: user.email, userName: user.userName },
    });
}

export { userRegister };
