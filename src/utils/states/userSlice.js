import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: null,
	reducers: {
		loginUser: (_state, action) => {
			return action.payload;
		},
		logoutUser: (_state) => {
			return null;
		},
	},
});

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;
