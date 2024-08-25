import LogoPNG from "../../assets/Logo.png";

const Logo = () => {
	return (
		<div className="flex flex-row items-center gap-1">
			<img
				src={LogoPNG}
				alt="HealthSync's Logo"
				className="w-[60px] h-[60px]"
			/>
			<h1 className="text-3xl font-bold">
				Health<span className="text-primary">Sync</span>
			</h1>
		</div>
	);
};

export default Logo;
