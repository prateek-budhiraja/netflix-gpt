import Header from "./Header";
import { setNowPlaying } from "../utils/states/movieSlice";
import useFetchMovies from "../hooks/useFetchMovies";
import CONSTANTS from "../utils/constants";

const Browse = () => {
	useFetchMovies(
		CONSTANTS.TMDB_BASE_URL + "/now_playing?page=1",
		setNowPlaying
	);

	return <Header />;
};

export default Browse;
