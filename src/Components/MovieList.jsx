import GenreConstant from "../Data/GenreConstant";
import Movies from "./Movies";

const MovieList = () => {
  return (
    <>
      {GenreConstant.map((item, i) => (
        <div className="grid gap-3  px-5" key={i}>
          <h3 className="font-bold text-2xl px-4 mt-5">{item.name}</h3>
          <Movies id={item.id} />
        </div>
      ))}
    </>
  );
};
export default MovieList;
