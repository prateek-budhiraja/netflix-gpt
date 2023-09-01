import { useSelector } from "react-redux";
import CONSTANTS from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const user = useSelector((state) => state.user);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleSignout = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
			<img
				src={CONSTANTS.SPELL_LOGO_BG_RED}
				alt="netflix logo"
				className="w-24 sm:w-40"
			/>
			{user && location.pathname !== "/" && (
				<div>
					<img
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						src={CONSTANTS.USER_AVATAR}
						alt="userpic"
						className="w-6 sm:w-10 cursor-pointer"
					/>
					<div
						className={`${
							!isMenuOpen && "hidden"
						} absolute bg-white rounded right-2 top-[60px] sm:top-[90px] p-2 shadow-md`}
					>
						<div className="w-4 h-4 bg-white rotate-45 absolute -top-2 right-2"></div>
						<h4>Welcome! {user.displayName}</h4>
						<hr className="mb-1 mt-2" />
						<span
							className="text-red-500 cursor-pointer inline-block"
							onClick={handleSignout}
						>
							Sign Out
						</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
