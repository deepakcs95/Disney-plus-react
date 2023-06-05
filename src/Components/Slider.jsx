import { useEffect, useRef, useState } from "react";
import getTrendingVideos from "../Services/MovieApi";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const base_image_url = "https://image.tmdb.org/t/p/original/";

const Slider = () => {
  const [trendingList, setData] = useState(null);
  const ref = useRef();

  useEffect(() => {
    getVideos();
  }, []);

  function getVideos() {
    const movieList = JSON.parse(localStorage.getItem("key"));
    if (movieList) {
      setData(movieList);
    } else {
      getTrendingVideos.then((resp) => {
        localStorage.setItem("key", JSON.stringify(resp?.data?.results));
        setData(resp?.data?.results);
      });
    }
  }

  function scrollRight(element) {
    const scrollLength = element.getBoundingClientRect().width;
    element.scrollLeft += scrollLength;
  }

  function scrollLeft(element) {
    const scrollLength = element.getBoundingClientRect().width;
    element.scrollLeft -= scrollLength;
  }

  console.log(trendingList);
  return (
    <div className="relative md:px-12">
      <BiRightArrow
        className="hidden md:block absolute right-2 top-1/2 text-white text-2xl"
        onClick={() => scrollRight(ref.current)}
      />
      <BiLeftArrow
        className="hidden md:block absolute left-2 top-1/2 text-white text-2xl"
        onClick={() => scrollLeft(ref.current)}
      />
      <div
        className=" flex w-full scrollbar-hide overflow-x-auto scroll-smooth  gap-5 p-2 "
        ref={ref}
      >
        {trendingList &&
          trendingList.map((item, i) => {
            return (
              <img
                key={i}
                src={base_image_url + item.backdrop_path}
                alt={item.original_title}
                className="min-w-full md:h-[300px] lg:h-[500px] object-cover object-left-top  rounded-2xl hover:outline outline-white transition-all duration-100  ease-in"
              />
            );
          })}
      </div>
    </div>
  );
};
export default Slider;
