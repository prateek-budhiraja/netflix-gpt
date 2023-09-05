import React from "react";

const MoviesSection = ({ movie }) => {
	console.log(movie);

	return (
		<>
			<div className="w-full aspect-video bg-black opacity-50 absolute top-0" />
			<div>
				<h1>{movie?.title}</h1>
			</div>
		</>
	);
};

export default MoviesSection;
