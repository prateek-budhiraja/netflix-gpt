import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "./Header";
import CONSTANTS from "../utils/constants";
import { setNowPlaying } from "../utils/states/movieSlice";

const Browse = () => {
	const dispatch = useDispatch();

	const getNowPlaying = async () => {
		const data = await fetch(
			"https://api.themoviedb.org/3/movie/now_playing?page=1",
			CONSTANTS.API_OPTIONS
		);
		const jsonData = await data.json();
		dispatch(setNowPlaying(jsonData.results));
	};

	useEffect(() => {
		getNowPlaying();
	}, []);

	return <Header />;
};

export default Browse;
