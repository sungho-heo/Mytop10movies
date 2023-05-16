import express from 'express';
import { getMovie } from "../controller/movieController"


const movieRouter = express.Router();

movieRouter.get("/",getMovie);
movieRouter.get("/:id");



export default movieRouter;