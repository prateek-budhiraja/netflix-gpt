import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CONSTANTS from "../utils/constants";

const useFetchMovies = (url, action) => {
	const dispatch = useDispatch();

	const getNowPlaying = async () => {
		const data = await fetch(url, CONSTANTS.API_OPTIONS);
		const jsonData = await data.json();
		dispatch(action(jsonData.results));
	};

	useEffect(() => {
		getNowPlaying();
	}, []);
};

export default useFetchMovies;
