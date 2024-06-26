const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
function HrMovieCard({ movie }) {
  return (
    <section className=" hover:border-gray-100 hover:scale-110 transition-all duration-150 cursor-pointer ease-in">
      <img
        src={IMAGE_BASE_URL + movie.backdrop_path}
        className="w-[110px] md:w-[260px] rounded-lg hover:border-[3px]"
      />
      <h2 className="w-[110px] md:w-[260px] text-white mt-2 ">{movie.title}</h2>
    </section>
  );
}

export default HrMovieCard;
