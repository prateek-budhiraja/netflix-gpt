import React, { useRef, useState } from "react";
import CONSTANTS from "../utils/constants";
import openai from "../utils/openaiConstants";

const GPT = () => {
	const [error, setError] = useState(null);
	const inputRef = useRef(null);

	const handleSubmit = (e) => {
		setError(null);
		e.preventDefault();

		const query = inputRef.current.value;
		if (!query) {
			setError("Please enter a valid query!");
			return;
		}

		gptResponse(query);
	};

	const gptResponse = async (query) => {
		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "user",
					content: `Generate 5 movies comma seperated for the given prompt. Prompt: ${query}.`,
				},
			],
			model: "gpt-3.5-turbo",
		});
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
		</>
	);
};

export default GPT;
