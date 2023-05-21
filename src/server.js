import express from "express";
import morgan from "morgan";
import movieRouter from "./routers/movieRouter";
import userRouter from "./routers/userRouter";

const app = express();

const loggerMorgan = morgan("dev");

app.use(loggerMorgan);
app.use(express.urlencoded({ extend: true }));
app.get("/", (req, res) => {
  res.send("Hello world")
})

app.use("/users", userRouter);
app.use("/movies", movieRouter);

export default app;


