import PrivateAccountIcon from "../../assets/icons/user.svg";
import AdminAccountIcon from "../../assets/icons/manager.svg";
import HealthCarAccountIcon from "../../assets/icons/doctor-01.svg";
import Logo from "../../Components/Main/Logo";

const Index = () => {
	return (
		<div>
			<header className="py-6">
				<div className="flex flex-row items-center justify-center px-12">
					<Logo />
				</div>
				<h2 className="text-3xl font-normal w-full text-center mt-24">
					Choose a profile to sign in
				</h2>
			</header>

			<section className="w-full flex flex-row justify-center gap-x-6">
				<div className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
					<div className="w-full bg-gray-200 grid place-content-center py-12 rounded-lg">
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
				</div>

				<div className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
					<div className="w-full bg-gray-200 grid place-content-center py-12 rounded-lg">
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
				</div>

				<div className="max-w-[250px] rounded-lg pb-4 flex flex-col items-center cursor-pointer">
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
				</div>
			</section>
		</div>
	);
};

export default Index;
