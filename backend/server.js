import app from "./src/app.js";
import connectDb from "./src/db/db.js";
import "dotenv/config"

connectDb();



app.listen(3000,()=>{
    console.log("server start on 3000");
});