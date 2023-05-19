import axios from "axios";
import Video from "../models/Video.js";

const apiLink = "https://api.themoviedb.org/3";

export const getMovie = async (req, res) => {
  const videos = await Video.find({});
  return res.send(videos);
}

export const postMovie = async (req, res) => {
  const movie = await axios(
    `${apiLink}/movie/popular?api_key=${process.env.API_KEY}&page=1`
  )
    .then((json) => json)
    .then((result) => result.data.results)
    .catch((error) => error)
  const { genre_ids, original_language,
            original_title, overview,
            popularity, release_date,
            title, video, vote_average, vote_count } = movie[1]; 
  try {
    const newVideo = await Video.create({
      genre_ids: genre_ids,
      original_language: original_language,
      original_title: original_title,
      overview: overview,
      popularity: popularity,
      release_date: release_date,
      title: title,
      video: video,
      vote_average: vote_average,
      vote_count:vote_count,
    })
    newVideo.save();
  } catch (error) {
    return res.status(400).send({ error });
  }
  return res.end();
};


export const oneMovie = async(req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  return res.send({ video });
}

