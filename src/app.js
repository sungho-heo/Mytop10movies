import app from "./server.js";
import "dotenv/config";
import "./db.js";
import "./models/Video";
import "./models/User";

const PORT = 4000;

const handleAppListen = (url) =>
  console.log(`🚀 Start Server http://localhost:${PORT}/`)

app.listen(PORT, handleAppListen)

export default handleAppListen