import axios from "axios";
import Video from "../models/Video.js";

const apiLink = "https://api.themoviedb.org/3";

export const getMovie = async (req, res) => {
  const videos = Video;
  return res.send({ Video });
}

export const postMovie = async (req, res) => {
  const movie = await axios(
    `${apiLink}/movie/popular?api_key=${process.env.API_KEY}&page=1&language=kr-ko`
  )
    .then((json) => json)
    .then((result) => result.data.results)
    .catch((error) => error)
  const { adult, genre_ids, original_language, original_title, overview, popularity, release_date, title, video, vote_average, vote_count } = movie[0];
  try {
    await Video.create({
      adult: adult,
      genre_ids: genre_ids,
      orginal_language: original_language,
      original_title: original_title,
      overview: overview,
      popularity: popularity,
      release_date: release_date,
      title: title,
      video: video,
      vote_average: vote_average,
      vote_count: vote_count,
    })
  } catch (error) {
    return res.status(404).json({ error: error });
  }
  return res.end();
};

export const oneMovie = (req, res) => {
  
}

