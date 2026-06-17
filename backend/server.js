import app from "./src/app.js";
import "dotenv/config";
import connectToDatabase from "./src/db/db.js";

const PORT = process.env.PORT || 5000;

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
