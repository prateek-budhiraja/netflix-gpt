import React, { useEffect } from "react";
import useFetchTrailer from "../hooks/useFetchTrailer";

const VideoBG = ({ movie }) => {
	const id = useFetchTrailer(movie?.id);

	const toggleMute = () => {
		const muteBtn =
			window.document.getElementsByClassName("ytp-mute-button")[0];
		console.log(muteBtn);
	};

	useEffect(() => {
		window.addEventListener("DOMContentLoaded", (event) => {
			document.querySelector(".ytp-chrome-top").style.display = "none";
		});
	}, []);

	return (
		<div className="max-w-screen">
			<iframe
				className="w-full aspect-video"
				src={
					"https://www.youtube.com/embed/" +
					id +
					"?&autoplay=1&mute=1&controls=0&loop=1&playlist=" +
					id
				}
				title="Movie Trailer"
				vq="hd720"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			></iframe>
		</div>
	);
};

export default VideoBG;
