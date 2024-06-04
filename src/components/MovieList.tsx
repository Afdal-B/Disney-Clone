import { useEffect, useRef, useState } from "react";
import { getMovieByGenreId } from "../services/GlobalApi";
import MovieCard from "./MovieCard";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import HrMovieCard from "./HrMovieCard";
function MovieList({ genreId, index_ }: { genreId: number; index_: number }) {
  const [movieList, setMovieList] = useState([]);
  const screenWidth = window.innerWidth;
  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    getMoviesByGenre();
  }, []);
  const getMoviesByGenre = () => {
    getMovieByGenreId(genreId).then((resp) => {
      setMovieList(resp.data.results);
    });
  };
  const sliderRight = (element: HTMLDivElement) => {
    element.scrollLeft += screenWidth - 110;
  };
  const sliderLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= screenWidth - 110;
  };
  return (
    <div className="relative">
      <IoChevronBackOutline
        className={`hidden md:block text-white text-[30px] absolute mx-8 ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[160px]"
        } cursor-pointer z-10`}
        onClick={() => {
          sliderLeft(elementRef.current);
        }}
      ></IoChevronBackOutline>
      <IoChevronForwardOutline
        className={`hidden md:block text-white text-[30px] absolute ${
          index_ % 3 == 0 ? "mt-[80px]" : "mt-[160px]"
        } right-0 cursor-pointer z-10`}
        onClick={() => {
          sliderRight(elementRef.current);
        }}
      ></IoChevronForwardOutline>
      <div
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-5 px-3 pb-10"
        ref={elementRef}
      >
        {movieList.map((item) => (
          <>
            {index_ % 3 == 0 ? (
              <HrMovieCard movie={item} />
            ) : (
              <MovieCard movie={item} />
            )}
          </>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
