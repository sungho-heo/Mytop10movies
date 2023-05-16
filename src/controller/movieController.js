import axios from "axios";

const apiLink = "https://api.themoviedb.org/3";

export const getMovie = async(req, res) => {
    const movie = await axios(
      `${apiLink}/movie/popular?api_key=${process.env.API_KEY}&page=1&language=kr-ko`
    )
      .then((json) => json)
      .then((result) => result.data.results)
      .catch((error) => error)
    return res.send(movie);
}

