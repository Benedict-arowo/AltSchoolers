import PrivateAccountIcon from "../../assets/icons/user.svg";
// import AdminAccountIcon from "../../assets/icons/manager.svg";
import HealthCarAccountIcon from "../../assets/icons/doctor-01.svg";
import Logo from "../../Components/Main/Logo";
import { Link, useLocation } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const Index = () => {
	const { state = { from: "/" } } = useLocation();
	return (
		<div>
			<header className="py-6">
				<div className="flex flex-row items-center justify-center md:justify-between px-12 lg:px-32">
					<Link
						to={state && state.from ? state.from : "/"}
						className="bg-gray-400 p-2 rounded-md hover:bg-gray-500 cursor-pointer hidden md:block">
						<ChevronLeft />
					</Link>
					<Logo />
					<div className="hidden md:block"></div>
				</div>
				<h2 className="text-3xl font-normal w-full text-center mt-24">
					Choose a profile to register
				</h2>
			</header>

			<section className="w-full flex flex-col md:flex-row items-center justify-center gap-x-24 mt-4">
				<Link
					to="/auth/user"
					state={{ from: "/auth" }}
					className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
					<div className="w-full hover:bg-gradient-to-r bg-gray-200 grid place-content-center py-12 rounded-lg hover:bg-blue-300 duration-300">
						<img
							src={PrivateAccountIcon}
							alt={"Private account icon"}
						/>
					</div>
					<div className="px-2">
						<h4 className="font-semibold w-full text-center mt-2 mb-0.5 text-lg">
							Private account
						</h4>
						<p className="text-gray-500 text-center max-w-full">
							Access your personal health records and
							appointments.
						</p>
					</div>
				</Link>

				<Link
					to="/auth/health-provider"
					state={{ from: "/auth" }}
					className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
					<div className="w-full hover:bg-gradient-to-r bg-gray-200 grid place-content-center py-12 rounded-lg hover:bg-blue-300 duration-300">
						<img
							src={HealthCarAccountIcon}
							alt={"Private account icon"}
						/>
					</div>
					<div className="px-2">
						<h4 className="font-semibold w-full text-center mt-2 mb-0.5 text-lg">
							Healthcare provider
						</h4>
						<p className="text-gray-500 text-center max-w-full">
							Access patient records and hospital systems
						</p>
					</div>
				</Link>

				{/* <Link
					to="/auth/admin"
					className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
					<div className="w-full bg-gray-200 grid place-content-center py-12 rounded-lg">
						<img
							src={AdminAccountIcon}
							alt={"Private account icon"}
						/>
					</div>
					<div className="px-2">
						<h4 className="font-semibold w-full text-center mt-2 mb-0.5 text-lg">
							Admin account
						</h4>
						<p className="text-gray-500 text-center max-w-full">
							Manage hospital operations and access analytics
						</p>
					</div>
				</Link> */}
			</section>
		</div>
	);
};

export default Index;
