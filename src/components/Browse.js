import Header from "./Header";
import MovieSlice, { setNowPlaying } from "../utils/states/movieSlice";
import useFetchMovies from "../hooks/useFetchMovies";
import CONSTANTS from "../utils/constants";
import HeroSection from "./HeroSection";
import MoviesSection from "./MoviesSection";

const Browse = () => {
	useFetchMovies(
		CONSTANTS.TMDB_BASE_URL + "/now_playing?page=1",
		setNowPlaying
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
