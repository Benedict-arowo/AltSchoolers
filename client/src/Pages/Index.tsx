import { Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";

const Index = () => {
	return (
		<div className="min-h-screen h-full">
			<Routes>
				<Route
					path="/"
					element={<App />}
					errorElement={<ErrorPage />}
				/>
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default Index;
