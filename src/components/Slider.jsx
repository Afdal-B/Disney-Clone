import { useEffect, useRef, useState } from "react";
import { getTrendingVideos } from "./../services/GlobalApi";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
//The screen width
const screenWidth = window.innerWidth;
function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    getTrendingVideos().then((resp) => {
      console.log(resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[160px] cursor-pointer"
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      ></HiChevronLeft>
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[160px] right-0 cursor-pointer"
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      ></HiChevronRight>
      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((item, index) => (
          <img
            key={index}
            src={IMAGE_BASE_URL + item.backdrop_path}
            className="min-w-full h-[310px] object-cover object-left-top mr-5 rounded-md hover:border-[4px] hover:border-gray-400 transition-all duration-100 ease-in-out "
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
