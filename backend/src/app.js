import express from "express";
import noteModel from "./models/note.model.js";

const app= express();
app.use(express.json());

app.post("/notes", async (req,res)=>{
  const data = req.body;
  
 const note = await noteModel.create(data)

  res.status(201).json({
    message:"note created",
    note
  })
})



export default app;