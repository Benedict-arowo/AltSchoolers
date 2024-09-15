import { CheckCircleIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Congratulations = () => {
	return (
		<div className="flex flex-col items-center justify-center bg-blue-50 text-gray-800 p-8 rounded-lg shadow-lg max-w-lg mx-auto">
			<CheckCircleIcon style={{ fontSize: "4rem", color: "#1E40AF" }} />{" "}
			<h1 className="text-3xl font-bold text-blue-600 mb-4">
				🎉 Congratulations!
			</h1>
			<p className="text-lg text-gray-700 text-center mb-6">
				Your registration is being processed. We'll notify you as soon
				as it's complete. Welcome aboard!
			</p>
			<Link
				to="/dashboard"
				className="bg-primary text-white px-4 py-2 rounded-md">
				Explore More
			</Link>
		</div>
	);
};

export default Congratulations;
