import React from "react";
import { useSelector } from "react-redux";
import VideoBG from "./VideoBG";
import MovieInfo from "./MovieInfo";

const HeroSection = () => {
	const nowPlaying = useSelector((state) => state.movie.nowPlaying);
	let randomMovie = null;

	if (nowPlaying.length) {
		randomMovie = nowPlaying[Math.floor(Math.random() * nowPlaying.length)];
		console.log(randomMovie);
	}

	return (
		<div>
			<VideoBG movie={randomMovie} />
			<MovieInfo movie={randomMovie} />
		</div>
	);
};

export default HeroSection;
