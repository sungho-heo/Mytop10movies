import express from 'express';
import "dotenv/config";
import morgan from 'morgan';
import movieRouter from './routers/movieRouter';
import userRouter from './routers/userRouter';

const app = express();

const PORT = 4000;
const loggerMorgan = morgan("dev");



app.use(loggerMorgan);
app.use(express.urlencoded({ extend: true }));

app.get("/", ((req, res) => {
    res.send("Hello world");
}))

app.use("/users", userRouter);
app.use("/movies", movieRouter);


const handleAppListen = (url) =>
  console.log(`🚀 Start Server http://localhost:${PORT}/`)

app.listen(PORT,handleAppListen)