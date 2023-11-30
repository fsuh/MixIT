import { NavLink } from "react-router-dom";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "../assets/fsuhLogo.png";

const Navbar = () => {
	return (
		<Wrapper>
			<div className="nav-center">
				<img
					src={Logo}
					alt="fsuh logo"
					className="nav-logo"
				/>
				<span className="logo">MixMaster</span>
				<div className="nav-links">
					<NavLink
						to="/"
						className="nav-link"
					>
						Home
					</NavLink>
					<NavLink
						to="/about"
						className="nav-link"
					>
						About
					</NavLink>
					<NavLink
						to="/newsletter"
						className="nav-link"
					>
						NewsLetter
					</NavLink>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
