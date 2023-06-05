import { useEffect, useState } from "react";
import getTrendingVideos from "../Services/MovieApi";

const base_image_url = "https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [trendingList, setData] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  function getVideos() {
    getTrendingVideos.then((resp) => setData(resp?.data?.results));
  }

  console.log(trendingList);
  return (
    <div className="flex w-full scrollbar-hide overflow-x-auto  snap-x  gap-5 p-2">
      {trendingList &&
        trendingList.map((item, i) => {
          return (
            <img
              key={i}
              src={base_image_url + item.backdrop_path}
              alt={item.original_title}
              className="min-w-full md:h-[300px] object-cover object-left-top rounded-2xl hover:outline outline-white "
            />
          );
        })}
    </div>
  );
};
export default Slider;
