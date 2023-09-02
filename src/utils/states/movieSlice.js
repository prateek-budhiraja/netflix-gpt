import { createSlice } from "@reduxjs/toolkit";

const movie = createSlice({
	name: "movie",
	initialState: {
		nowPlaying: [],
	},
	reducers: {
		setNowPlaying: (state, action) => {
			state.nowPlaying = action.payload;
		},
	},
});

export const { setNowPlaying } = movie.actions;
export default movie.reducer;
