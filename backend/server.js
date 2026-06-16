import app from "./src/app.js";
import connectDB from "./src/db/db.js";


connectDB();

app.listen(8080,()=>{
    console.log("server start on port ",8080);
})