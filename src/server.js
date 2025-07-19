import app from "./app.js";
import { connectToDb } from "./App/config/db.js";
// /run/media/sj/developer/web/L1B11/11mi/ass/EduVerse/server-EduVerse/src/server.js
const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectToDb();
    app.listen(port, () => {
      console.log(`Server is running on port `, port);
    });
  } catch (error) {
    console.log("❌ Failed to connect to MongoDB:", error);
  }
};

startServer();
