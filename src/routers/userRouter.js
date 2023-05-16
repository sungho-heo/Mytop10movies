import express from 'express';
import { userJoin, userLogin } from '../controller/userController';

const userRouter = express.Router();

userRouter.get("/login/:id", userLogin);
userRouter.post("/join", userJoin);

export default userRouter;
