import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MovieInfo from "../components/MovieInfo";

describe("Contact Us Page Test Cases", () => {
	it("Should load Movie Info component with movie title", () => {
		render(<MovieInfo />);

		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	});

	it("Should load two buttons inside Contact component", () => {
		render(<MovieInfo />);

		const buttons = screen.getAllByRole("button");
		expect(buttons.length).toBe(2);
	});
});
