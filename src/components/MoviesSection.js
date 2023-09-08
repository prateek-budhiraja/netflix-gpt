import { useSelector } from "react-redux";
import MovieRow from "./MovieRow";

const MoviesSection = () => {
	const movies = useSelector((state) => state.movie);

	return (
		<div className="-mt-44 z-50 relative">
			<MovieRow title="Now Playing Movies" movies={movies.nowPlaying} />
			<MovieRow title="Top Rated Movies" movies={movies.topRated} />
			<MovieRow title="Popular Movies" movies={movies.popular} />
		</div>
	);
};

export default MoviesSection;
