import axios from "axios";

const apiLink = "https://api.themoviedb.org/3";

export const getMovie = async(req, res) => {
    const movie =await axios(
        `${apiLink}/movie/top_rated?api_key=${process.env.API_KEY}&page=1`
    )
        .then((json) => json).then(result => result.data.results).catch((error) => error)
    console.log(movie.length);
    return res.end();
}