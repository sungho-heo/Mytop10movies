import express from 'express';
import { getMovie, oneMovie, postMovie } from "../controller/movieController"


const movieRouter = express.Router();

movieRouter.route("/").get(getMovie).post(postMovie);
movieRouter.get("/:id", oneMovie);



export default movieRouter;