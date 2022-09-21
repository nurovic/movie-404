import { SetStateAction, useEffect, useState } from "react";
import MoviesList from "../Components/MoviesList";
import { useAppDispatch, useAppSelector } from "../Redux";
import { fetchTvSeries, fetchTvId } from "../features/tvSeriesSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { TMovie } from "../helpers/types/typesMovie";
import { TtvId, TSeasons } from "../helpers/types/typesTv";



const Movies = () => {
  const movies = useAppSelector((state) => state.tv.tvSeries);
  const tvId = useAppSelector((state) => state.tv.tvId);
  const dispatch = useAppDispatch();
  const [clicked, setClicked] = useState<TMovie>();

  const clickedMovie = (movie: SetStateAction<TMovie |undefined>) => {
      setClicked(movie)
      dispatch(fetchTvId(movie || movies[0]));
    };
    
    useEffect(() => {
      dispatch(fetchTvSeries())

  }, []);


  return (
    <div>
      <MoviesList movie={clicked ? clicked : movies[0]} />
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        slidesPerGroup={2}
        direction="vertical"
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="top-20 h-96 mySwiper"
      >
        {tvId?.map((movie:TtvId) => (
          <SwiperSlide  key={movie.id}>
            <h1 className="text-white absolute right-20 w-56  bottom-16 h-32 t-8"> {movie.name} </h1>
            <img
              className="border-2 rounded absolute right-20 w-56 h-32 object-cover bottom-8 h-32 opacity-80"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="movie.poster_path"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={10}
        spaceBetween={20}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="absolute h-96 mySwiper"
      >
        {movies?.map((movie:TMovie) => (
          <SwiperSlide className="px-8 " key={movie.id}>
            <img
              className="border-2 absolute bottom-8 opacity-80"
              src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
              alt="movie.poster_path"
              onClick={() => clickedMovie(movie)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Movies;
