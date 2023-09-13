import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContentRow from "./ContentRow";
import { setGPTMovies } from "../utils/states/gptSlice";
import useLoading from "../hooks/useLoader";
import openai from "../utils/openaiConstants";
import CONSTANTS from "../utils/constants";

const GPT = () => {
	const dispatch = useDispatch();
	const gptMovies = useSelector((state) => state.gpt.gptMovies);
	const [error, setError] = useState(null);
	const inputRef = useRef(null);
	const { loading, hideLoading, showLoading } = useLoading();

	const handleSubmit = (e) => {
		e.preventDefault();
		setError(null);
		showLoading();

		const query = inputRef.current.value;
		if (!query) {
			setError("Please enter a valid query!");
			hideLoading();
			return;
		}

		getResponseFromGPT(query);
	};

	const searchMovieTMDB = async (movie) => {
		const data = await fetch(
			CONSTANTS.TMDB_MOVIE_SEARCH_URL +
				"?query=" +
				movie +
				"&include_adult=false&language=en-US&page=1",
			CONSTANTS.API_OPTIONS
		);
		const json = await data.json();
		const filteredMovie = json?.results?.filter((mo) => mo.title === movie)[0];

		return filteredMovie;
	};

	const getResponseFromGPT = async (query) => {
		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "user",
					content: `Generate 5 comma seperated movies for the given prompt, if you can't say null. Prompt: ${query}.`,
				},
			],
			model: "gpt-3.5-turbo",
		});
		const movieResult = completion?.choices[0]?.message?.content?.split(", ");

		if (!movieResult) {
			setError("No movies found!");
			hideLoading();
			return;
		}

		const promiseArray = movieResult.map((movie) => searchMovieTMDB(movie));

		const tmdbResults = await Promise.all(promiseArray);
		if (tmdbResults) hideLoading();
		dispatch(setGPTMovies(tmdbResults));
	};

	return (
		<>
			<img
				src={CONSTANTS.LOGIN_SCREEN_BG}
				alt="background"
				className="fixed object-cover w-screen h-screen brightness-[.3] z-0"
			/>
			{error && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-lg">
					<p className="text-red-700 font-medium">{error}</p>
				</div>
			)}
			<form
				className="bg-white absolute top-52 left-1/2 -translate-x-1/2 flex rounded-lg"
				onSubmit={handleSubmit}
			>
				<input
					ref={inputRef}
					className="w-96 px-6 py-3 rounded-lg outline-none"
					type="text"
					placeholder="What do you want to watch?"
				/>
				<button className="rounded-lg bg-red-700 text-white font-medium px-4">
					Search
				</button>
			</form>
			{loading && (
				<div className="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-70 rounded flex justify-center items-center">
					<div className="p-8 shadow-md relative">
						<svg
							className="w-20 h-20 animate-spin text-red-700"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4.75V6.25"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M17.1266 6.87347L16.0659 7.93413"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M19.25 12L17.75 12"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M17.1266 17.1265L16.0659 16.0659"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M12 17.75V19.25"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M7.9342 16.0659L6.87354 17.1265"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M6.25 12L4.75 12"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M7.9342 7.93413L6.87354 6.87347"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</div>
				</div>
			)}
			{gptMovies?.length > 0 && (
				<div className="absolute z-50 top-96 bg-black bg-opacity-50 py-8 w-screen">
					<ContentRow title="Results" list={gptMovies} />
				</div>
			)}
		</>
	);
};

export default GPT;
