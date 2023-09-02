import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef } from "react";
import useOnClickOutside from "../hooks/useClickOutside";
import { auth } from "../utils/firebase";
import { loginUser, logoutUser } from "../utils/states/userSlice";
import CONSTANTS from "../utils/constants";

const Header = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.user);
	const refToMenu = useRef(null);
	const { isMenuOpen, setIsMenuOpen } = useOnClickOutside(
		refToMenu,
		handleCloseMenu
	);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(loginUser({ uid, email, displayName }));
				navigate("/browse");
			} else {
				dispatch(logoutUser());
				navigate("/");
			}
		});

		return () => unsubscribe();
	}, []);

	const handleSignout = () => {
		signOut(auth)
			.then()
			.catch((error) => {
				console.log(error);
			});
	};

	function handleCloseMenu(event) {
		setIsMenuOpen(false);
	}

	return (
		<div className="absolute top-0 left-0 right-0 z-10 p-4 flex justify-between items-center">
			<img
				src={CONSTANTS.SPELL_LOGO_BG_RED}
				alt="netflix logo"
				className="w-24 sm:w-40"
			/>
			{user && (
				<div ref={refToMenu}>
					<img
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						src={CONSTANTS.USER_AVATAR}
						alt="userpic"
						className="w-6 sm:w-10 cursor-pointer"
					/>
					<div
						className={`${
							!isMenuOpen && "hidden"
						} absolute bg-white rounded right-2 top-[60px] sm:top-[95px] p-2 shadow-md animate-openmenu`}
					>
						<div className="w-4 h-4 bg-white rotate-45 absolute -top-2 right-2" />
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
