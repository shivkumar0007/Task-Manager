import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is requred"],
    unique: [true, "Email alredy exits"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password length should be 6 and greater than 6"],
    select: false,
  },
});

const userModel = mongoose.model("user", userSchema);

export default userModel;
