import app from "./src/app.js";
import connectDb from "./src/db/db.js";
import "dotenv/config"

connectDb();

const PORT=8080

app.listen(PORT,()=>{
    console.log("server start on ", PORT);
});