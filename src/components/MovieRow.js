import CONSTANTS from "../utils/constants";

const MovieRow = ({ title, movies }) => {
	return (
		<div className="px-8 cursor-pointer pb-8">
			<h2 className="text-4xl text-white mb-6 font-bold">{title}</h2>
			<div className="flex gap-4 overflow-x-scroll">
				{movies.map((movie) => (
					<div key={movie.id}>
						<img
							className="min-w-[250px] rounded-lg"
							src={CONSTANTS.TMDB_IMAGE_BASE_URL + movie.backdrop_path}
							alt={movie.title}
						/>
						<h4 className="text-white mt-1 font-medium">{movie.title}</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default MovieRow;
