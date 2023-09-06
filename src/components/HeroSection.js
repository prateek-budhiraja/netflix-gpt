import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import MovieInfo from "./MovieInfo";

const HeroSection = () => {
	const nowPlaying = useSelector((state) => state.movie.nowPlaying);

	if (!nowPlaying.length) return null;

	const randomMovie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)];

	const { title, overview } = randomMovie;

	return (
		<>
			<VideoBG movie={randomMovie} />
			<MovieInfo title={title} overview={overview} />
		</>
	);
};

export default HeroSection;
