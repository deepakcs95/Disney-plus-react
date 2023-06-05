import { useEffect, useState } from "react";
import { getMoviesByGenreId } from "../Services/MovieApi";

const base_image_url = "https://image.tmdb.org/t/p/original/";

const Movies = ({ id }) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    getMoviesById(id);
  }, []);

  function getMoviesById(id) {
    const movieList = JSON.parse(localStorage.getItem(`${id}`));
    if (movieList) {
      setMovies(movieList);
    } else {
      getMoviesByGenreId(id).then((resp) => {
        localStorage.setItem(`${id}`, JSON.stringify(resp?.data?.results));
        setMovies(resp?.data?.results);
        console.log(localStorage.getItem(`${id}`));
      });
    }
    console.log(movieList);
  }

  return (
    <div className="flex min-h-full px-4 py-5 gap-3 overflow-x-auto scroll-smooth scrollbar-hide rounded-md   ">
      {movies &&
        movies.map((item, i) => (
          <img
            key={i}
            className=" h-[300px] object-cover object-left-top  rounded-lg hover:outline hover:scale-105 outline-white transition-all duration-150 ease-in-out"
            src={base_image_url + item.poster_path}
            alt=""
          />
        ))}
    </div>
  );
};
export default Movies;
