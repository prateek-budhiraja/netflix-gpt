import Header from "./Header";
import {
	setNowPlaying,
	setPopular,
	setTopRated,
} from "../utils/states/movieSlice";
import useFetchTmdbList from "../hooks/useFetchTmdbList";
import CONSTANTS from "../utils/constants";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";

const Browse = () => {
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/now_playing?page=1",
		setNowPlaying
	);
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/popular?page=1",
		setPopular
	);
	useFetchTmdbList(
		CONSTANTS.TMDB_MOVIE_BASE_URL + "/top_rated?page=1",
		setTopRated
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
