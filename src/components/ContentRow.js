import CONSTANTS from "../utils/constants";

const ContentRow = ({ title, list }) => {
	return (
		<div className="px-8 cursor-pointer pb-8">
			<h2 className="text-4xl text-white mb-6 font-bold">{title}</h2>
			<div className="flex gap-4 overflow-x-scroll">
				{list.map((content) => (
					<div key={content.id}>
						<img
							className="min-w-[250px] rounded-lg"
							src={CONSTANTS.TMDB_IMAGE_BASE_URL + content.backdrop_path}
							alt={content.title || content.name}
						/>
						<h4 className="text-white mt-1 font-medium">
							{content.title || content.name}
						</h4>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContentRow;
