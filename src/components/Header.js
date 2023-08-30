import CONSTANTS from "../utils/constants";

const Header = () => {
	return (
		<div>
			<img
				src={CONSTANTS.SPELL_LOGO_BG_RED}
				alt="netflix logo"
				className="absolute w-40 top-6 left-10 z-10"
			/>
		</div>
	);
};

export default Header;
