import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";

export const store = configureStore({
	reducer: {
		user: userReducer,
		movie: movieReducer,
	},
});

export default store;
