import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Header = ({ showNavigation = true }) => {
	return (
		<header className="container mx-auto px-4 py-6">
			<nav className="flex justify-between items-center">
				<Link to={"/"} className="flex items-center space-x-2">
					<motion.div
						className="w-10 h-10 bg-blue-500 rounded-full"
						animate={{ rotate: 360 }}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "linear",
						}}></motion.div>
					<span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
						HealthSync
					</span>
				</Link>
				{showNavigation && (
					<ul className="hidden md:flex space-x-8">
						{["Features", "Goals", "Mission", "Contact"].map(
							(item) => (
								<li key={item}>
									<a
										href={`/#${item.toLowerCase()}`}
										className="text-gray-700 hover:text-blue-500 transition-colors">
										{item}
									</a>
								</li>
							)
						)}
					</ul>
				)}
				<div className="space-x-4">
					<Link
						to="/auth/user"
						className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
						Sign Up
					</Link>
				</div>
			</nav>
		</header>
	);
};

export default Header;
