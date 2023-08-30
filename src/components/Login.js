import { useState } from "react";
import Header from "./Header";
import CONSTANTS from "../utils/constants";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const [isLoading, setIsLoading] = useState(false);

	const handleSignInToggle = () => {
		setIsLoading(true);
		setTimeout(() => {
			setIsSignIn(!isSignIn);
			setIsLoading(false);
		}, 300);
	};

	return (
		<div>
			<Header />

			{/* bg image */}
			<img
				src={CONSTANTS.LOGIN_SCREEN_BG}
				alt="login bg screen"
				className="hidden sm:block brightness-[.3] object-cover w-[100vw] h-[100vh]"
			/>

			{/* Loading spinner */}
			{isLoading && (
				<div class="absolute top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-black bg-opacity-70 rounded flex justify-center items-center">
					<div class="p-8 shadow-md relative">
						<svg
							class="w-20 h-20 animate-spin text-red-700"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 4.75V6.25"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M17.1266 6.87347L16.0659 7.93413"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M19.25 12L17.75 12"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M17.1266 17.1265L16.0659 16.0659"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M12 17.75V19.25"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M7.9342 16.0659L6.87354 17.1265"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M6.25 12L4.75 12"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
							<path
								d="M7.9342 7.93413L6.87354 6.87347"
								stroke="currentColor"
								stroke-width="1.5"
								stroke-linecap="round"
								stroke-linejoin="round"
							></path>
						</svg>
					</div>
				</div>
			)}

			{/* Signin/Signup form */}
			<form
				className={`absolute w-full sm:w-[400px] ${
					isLoading
						? "opacity-0"
						: "opacity-100 transition-opacity duration-300 ease-in-out"
				} top-[50%] left-[50%] -translate-y-1/2 -translate-x-1/2 bg-black rounded bg-opacity-70 flex flex-col p-10 text-white`}
			>
				<h1 className="text-3xl font-bold mb-8">
					{isSignIn ? "Sign In" : "Sign Up"}
				</h1>
				{isSignIn && (
					<input
						type="text"
						placeholder="Full Name"
						className="mb-4 p-3 rounded bg-gray-700 w-full"
					/>
				)}
				<input
					type="text"
					placeholder="Email or Phone Number"
					className="mb-4 p-3 rounded bg-gray-700 w-full"
				/>
				<input
					type="password"
					placeholder="Password"
					className="mb-8 p-3 rounded bg-gray-700 w-full"
				/>
				<button className="bg-red-700 py-3 rounded mb-6">
					{isSignIn ? "Sign In" : "Sign Up"}
				</button>
				<p className="mb-24">
					{isSignIn ? "New to Netflix? " : "Already have an account? "}
					<span
						onClick={handleSignInToggle}
						className="text-red-700 cursor-pointer"
					>
						{isSignIn ? "Sign up now" : "Sign in now"}.
					</span>
				</p>
			</form>
		</div>
	);
};

export default Login;
