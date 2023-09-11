import { createSlice } from "@reduxjs/toolkit";

const gpt = createSlice({
	name: "gpt",
	initialState: {
		view: false,
	},
	reducers: {
		setView: (state) => {
			state.view = !state.view;
		},
	},
});

export const { setView } = gpt.actions;
export default gpt.reducer;
