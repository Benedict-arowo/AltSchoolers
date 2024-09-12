import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import {
	HeartIcon,
	ShieldCheckIcon,
	GlobeAltIcon,
	LightningBoltIcon,
	UsersIcon,
	ServerIcon,
	ChartBarIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";

const FeatureCard = ({ icon: Icon, title, description }) => (
	<motion.div
		className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
		whileHover={{ scale: 1.05 }}
		whileTap={{ scale: 0.95 }}>
		<Icon className="w-12 h-12 text-blue-500 mb-4" />
		<h3 className="text-xl font-semibold mb-2">{title}</h3>
		<p className="text-gray-600">{description}</p>
	</motion.div>
);

const AnimatedNumber = ({ value }) => {
	const [displayValue, setDisplayValue] = useState(0);

	useEffect(() => {
		let start = 0;
		const end = parseInt(value);
		const duration = 2000;
		let timer = setInterval(() => {
			start += 1;
			setDisplayValue(start);
			if (start === end) clearInterval(timer);
		}, duration / end);

		return () => clearInterval(timer);
	}, [value]);

	return <span className="text-4xl font-bold">{displayValue}</span>;
};

const App = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
			<Header />

			<main>
				{/* Hero Section */}
				<section className="container mx-auto px-4 py-32 text-center">
					<motion.h1
						className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}>
						Transforming Healthcare in Nigeria
					</motion.h1>
					<motion.p
						className="text-lg sm:text-xl text-gray-700 mb-10 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}>
						HealthSync aims to revolutionize patient care by
						becoming the main data center for Nigerians' healthcare
						information. With fast, secure access, hospitals can
						retrieve patient records, allergies, and other medical
						details using just the patient ID card.
					</motion.p>
					<motion.div
						className="flex justify-center space-x-4"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}>
						<Button
							label="Get Started"
							className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
						/>

						<Link
							to={"/about"}
							className=" text-blue-700 font-semibold py-2 px-4 rounded-lg hover:border-blue-700 border-transparent border-2 transition duration-300">
							Learn More
						</Link>
					</motion.div>
				</section>

				{/* Features Section */}
				<section id="features" className="py-20 bg-gray-50">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							Revolutionizing Healthcare Access
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<FeatureCard
								icon={HeartIcon}
								title="Comprehensive Patient Records"
								description="Access all medical records, allergies, and treatment history with just an ID card."
							/>
							<FeatureCard
								icon={ShieldCheckIcon}
								title="Security & Privacy"
								description="Cutting-edge encryption to keep all patient data safe and private."
							/>
							<FeatureCard
								icon={GlobeAltIcon}
								title="Accessible Anywhere"
								description="Get fast access to patient information in any hospital across Nigeria."
							/>
							<FeatureCard
								icon={LightningBoltIcon}
								title="Blazing Fast Servers"
								description="Unlike slow government systems, HealthSync ensures data is processed in real-time."
							/>
							<FeatureCard
								icon={UsersIcon}
								title="Collaborative Healthcare"
								description="Enable seamless collaboration between healthcare providers across the country."
							/>
							<FeatureCard
								icon={ServerIcon}
								title="Centralized Data Hub"
								description="One secure, centralized system that stores all healthcare information."
							/>
						</div>
					</div>
				</section>

				{/* Goals Section */}
				<section id="goals" className="py-20 bg-white">
					<div className="container mx-auto px-4">
						<h2 className="text-4xl font-bold text-center mb-12">
							Our Goals
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<FeatureCard
								icon={ChartBarIcon}
								title="Improve Patient Outcomes"
								description="Enhance care quality with quick, accurate access to patient information."
							/>
							<FeatureCard
								icon={LightningBoltIcon}
								title="Faster Processes"
								description="Accelerate healthcare services with a focus on data retrieval and management."
							/>
							<FeatureCard
								icon={UsersIcon}
								title="Empower Healthcare Providers"
								description="Equip hospitals with the tools they need to offer better, faster care."
							/>
						</div>
					</div>
				</section>

				{/* Mission Section */}
				<section
					id="mission"
					className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-8">Our Mission</h2>
						<p className="text-xl mb-12 max-w-3xl mx-auto">
							At HealthSync, our mission is to create a faster,
							more efficient healthcare system for Nigeria,
							ensuring that patient data is always accessible,
							secure, and accurate. We aim to transform the
							healthcare experience across the country by
							leveraging modern technology.
						</p>
						<motion.div
							className="grid grid-cols-1 md:grid-cols-3 gap-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}>
							<div>
								<AnimatedNumber value="1000000" />
								<p className="text-lg">Patients Served</p>
							</div>
							<div>
								<AnimatedNumber value="5000" />
								<p className="text-lg">Hospitals Partnered</p>
							</div>
							<div>
								<AnimatedNumber value="200" />
								<p className="text-lg">Cities Covered</p>
							</div>
						</motion.div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20 bg-gray-50">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-8">
							Get in Touch
						</h2>
						<p className="text-xl mb-12 max-w-2xl mx-auto">
							Want to learn more about HealthSync or partner with
							us? Contact our team today to start transforming
							healthcare together.
						</p>
						<div className="flex justify-center space-x-4">
							<InputText
								className="border-2 px-4 py-2"
								placeholder="Enter your email"
							/>
							<Button
								label="Contact Us"
								className="bg-black text-white py-1 px-4 rounded-lg shadow-md hover:bg-neutral-800 transition duration-300"
							/>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

export default App;
