import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContentRow from "../components/ContentRow";
import MOCK_DATA from "./mocks/nowPlayingMock.json";

describe("ContentRow Component", () => {
	it("should render ContentRow component with title", () => {
		render(<ContentRow title="Now Playing" list={MOCK_DATA} />);
		const title = screen.getByRole("heading", { name: "Now Playing" });
		expect(title).toBeInTheDocument();
	});

	it("should render ContentRow component with movies", () => {
		render(<ContentRow title="Now Playing" list={MOCK_DATA} />);

		const moviePoster = screen.getAllByRole("img");
		expect(moviePoster.length).toBe(20);

		const movieTitle = screen.getAllByTestId("movie-title");
		expect(movieTitle.length).toBe(20);
	});
});
