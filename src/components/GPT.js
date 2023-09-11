import React from "react";
import CONSTANTS from "../utils/constants";

const GPT = () => {
	return (
		<>
			<img
				src={CONSTANTS.LOGIN_SCREEN_BG}
				alt="background"
				className="fixed object-cover w-screen h-screen brightness-[.3]"
			/>
			<h1 className="text-4xl text-white">Inside GPT</h1>
		</>
	);
};

export default GPT;
