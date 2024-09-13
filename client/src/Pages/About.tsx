import { Button } from "primereact/button";
import Header from "../Components/Main/Header";
import Footer from "../Components/Main/Footer";

const AboutUs = () => {
	return (
		<div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
			<main>
				<Header showNavigation={false} />
				{/* Hero Section */}
				<section className="container mx-auto px-4 py-32 text-center">
					<h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
						HealthSync
					</h1>
					<p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto">
						Imagine a world where your medical team has every detail
						they need at their fingertips—patient histories,
						insurance, allergies, and more. Our all-in-one hospital
						app makes this a reality. Revolutionize patient care
						with instant access to vital information, streamline
						operations, and elevate your healthcare services to the
						next level!
					</p>
				</section>

				{/* Goals Section */}
				<section
					id="goals"
					className="py-20 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-4xl font-bold mb-8">Our Goals</h2>
						<ul className="text-xl mb-12 max-w-3xl mx-auto list-none list-inside">
							<li>
								Revolutionize patient care by centralizing all
								patient data in one easily accessible platform.
							</li>
							<li>
								Improve hospital efficiency with streamlined
								operations.
							</li>
							<li>
								Enhance data security and compliance to protect
								sensitive patient information.
							</li>
							<li>
								Enable seamless integration with modern
								healthcare technologies like wearable devices.
							</li>
							<li>
								Support a global user base with multilingual
								capabilities.
							</li>
						</ul>
					</div>
				</section>

				{/* Features Section */}
				<section id="features" className="py-20 bg-gray-50">
					<div className="container mx-auto px-4 md:px-12">
						<h2 className="text-4xl font-bold text-center mb-8">
							Key Features
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							<FeatureCard
								title="Hospital Registration"
								description="Onboard hospitals onto the HealthSync platform, allowing them to manage and access patient data efficiently."
							/>
							<FeatureCard
								title="User Registration (with NIN Integration)"
								description="Securely register users using their National Identification Number (NIN) for accurate identification and improved security."
							/>
							<FeatureCard
								title="Patient Management"
								description="Manage comprehensive patient profiles, including personal details, medical history, vaccines, and more."
							/>
							<FeatureCard
								title="Medical History Tracking"
								description="Track and manage patient medical histories, including diagnoses, treatments, and medications, for better care continuity."
							/>
							<FeatureCard
								title="Insurance Management"
								description="Integrate with insurance providers for seamless claims processing and verification, reducing administrative burdens."
							/>
							<FeatureCard
								title="Emergency Access"
								description="Provide quick access to critical patient information in emergency situations to facilitate prompt medical response."
							/>
							<FeatureCard
								title="Data Security & Compliance"
								description="Ensure all patient data is protected and compliant with healthcare regulations to maintain trust and integrity."
							/>
							<FeatureCard
								title="Integration with Wearable Devices"
								description="Sync data from wearable devices to keep patient records up-to-date with the latest health metrics."
							/>
							<FeatureCard
								title="Analytics & Reporting"
								description="Generate insightful reports to track patient outcomes, hospital performance, and other key metrics for informed decision-making."
							/>
							<FeatureCard
								title="Multilingual Support"
								description="Offer the app in multiple languages to ensure accessibility for a diverse global user base."
							/>
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" className="py-20 bg-gray-50 text-center">
					<h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
					<p className="text-xl mb-12 max-w-2xl mx-auto">
						Have questions or want to learn more about HealthSync?
						Contact us today to start a conversation about how we
						can work together to enhance healthcare in Nigeria and
						beyond.
					</p>
					<div className="flex justify-center space-x-4">
						<input
							type="text"
							placeholder="Enter your email"
							className="p-inputtext-lg border-2 border-gray-300 rounded-lg py-2 px-4"
						/>
						<Button
							label="Contact Us"
							className="bg-black text-white py-1 px-4 rounded-lg shadow-md hover:bg-neutral-800 transition duration-300"
						/>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
};

const FeatureCard = ({
	title,
	description,
}: {
	title: string;
	description: string;
}) => (
	<div className="bg-white p-6 rounded-lg shadow-lg">
		<h3 className="text-2xl font-semibold mb-4">{title}</h3>
		<p className="text-gray-700">{description}</p>
	</div>
);

export default AboutUs;
