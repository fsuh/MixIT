import { Outlet, useNavigation } from "react-router-dom";
import { Navbar } from "../components";

const HomeLayout = () => {
	const navigation = useNavigation();
	const isPageLoadig = navigation.state === "loading";
	// const value = "some value";
	return (
		<>
			<Navbar />
			<section className="page">
				{isPageLoadig ? <div className="loading"></div> : <Outlet />}
			</section>
		</>
	);
};
export default HomeLayout;
