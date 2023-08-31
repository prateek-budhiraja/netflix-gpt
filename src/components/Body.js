import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse";
import Login from "./Login";
import { auth } from "../utils/firebase";
import { loginUser } from "../utils/states/userSlice";

const Body = () => {
	const dispatch = useDispatch();
	const appRouter = createBrowserRouter([
		{
			path: "/",
			element: <Login />,
		},
		{
			path: "/browse",
			element: <Browse />,
		},
	]);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(loginUser({ uid, email, displayName }));
			} else {
				dispatch(loginUser());
			}
		});
	}, []);

	return (
		<div className="bg-black w-[100vw] h-[100vh]">
			<RouterProvider router={appRouter} />
		</div>
	);
};

export default Body;
