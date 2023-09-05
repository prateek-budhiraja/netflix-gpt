const MovieInfo = ({ title, overview }) => {
	return (
		<>
			<div className="w-full aspect-video bg-black opacity-50 absolute top-0" />
			<div className="text-white absolute top-[50%] -translate-y-[50%] left-12">
				<h1 className="text-6xl font-bold">{title}</h1>
				<p className="my-4 leading-5 w-[480px]">{overview}</p>
				<button className="bg-gray-100 text-lg font-medium text-black px-6 py-1.5 rounded-full hover:opacity-90 inline-block mr-4">
					▶ Play
				</button>
				<button className="bg-white text-lg font-medium text-black px-6 py-1.5 rounded-full bg-opacity-50">
					ℹ️ More Info
				</button>
			</div>
		</>
	);
};

export default MovieInfo;
