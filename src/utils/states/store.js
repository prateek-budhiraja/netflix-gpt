import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import tvReducer from "./tvSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
		tv: tvReducer,
	},
});

export default store;
