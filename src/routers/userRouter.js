import express from "express";
import { allUsers,userCreate } from "../controller/userController";

const userRouter = express.Router();

userRouter.route("/").get(allUsers);
userRouter.post("/join", userCreate);
userRouter.delete("/:id");

export default userRouter