import mongoose from "mongoose";


const noteSchema =new  mongoose.Schema({
  task: String,
  project:String,
  priority:String,
  dueDate:Date,
  status:String
})

const noteModel = mongoose.model("note",noteSchema);

export default noteModel;