import express from "express";
import { allUsers,deleteUser,userCreate } from "../controller/userController";

const userRouter = express.Router();

userRouter.route("/").get(allUsers);
userRouter.post("/join", userCreate);
userRouter.delete("/:id", deleteUser);

export default userRouter