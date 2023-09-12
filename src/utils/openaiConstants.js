import OpenAI from "openai";
import CONSTANTS from "./constants";

const openaiConstant = new OpenAI({
	apiKey: CONSTANTS.OPENAI_API_KEY,
	dangerouslyAllowBrowser: true,
});

export default openaiConstant;
