import express from 'express';
import morgan from 'morgan';

const app = express();

const PORT = 4000;
const loggerMorgan = morgan("dev");


app.use(loggerMorgan);
app.use(express.urlencoded({ extend: true }));

app.get("/", ((req, res) => {
    res.send("Hello world");
}))
const handleAppListen = (url) =>
  console.log(`🚀 Start Server http://localhost:${PORT}/`)

app.listen(PORT,handleAppListen)