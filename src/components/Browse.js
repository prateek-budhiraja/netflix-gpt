import Header from "./Header";
import {
	setNowPlaying as setMovieNowPlaying,
	setPopular as setMoviePopular,
	setTopRated as setMovieTopRated,
} from "../utils/states/movieSlice";
import {
	setPopular as setTVPopular,
	setTopRated as setTVTopRated,
} from "../utils/states/tvSlice";

import useFetchTmdbList from "../hooks/useFetchTmdbList";
import CONSTANTS from "../utils/constants";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";

const Browse = () => {
	// fetching movies
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/now_playing?page=1",
		setMovieNowPlaying
	);
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/popular?page=1",
		setMoviePopular
	);
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/top_rated?page=1",
		setMovieTopRated
	);

	// fetching tv shows
	useFetchTmdbList(
		CONSTANTS.TMDB_TV_BASE_URL + "/popular?page=1",
		setTVPopular
	);
	useFetchTmdbList(
		CONSTANTS.TMDB_TV_BASE_URL + "/top_rated?page=1",
		setTVTopRated
	);

	return (
		<div>
			<Header />
			<HeroSection />
			<MoviesSection />
		</div>
	);
};

export default Browse;
