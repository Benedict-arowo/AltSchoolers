import { Route, Routes } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Error";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import AuthIndex from "./Authentication/Index";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import VisitInquiry from "./Client Dashboard/VisitInquiry";

// import "primeicons/primeicons.css"; //icons
// import "primeflex/primeflex.css"; // flex

const Index = () => {
	return (
		<div className="min-h-screen h-full">
			<Routes>
				<Route
					path="/"
					element={<App />}
					errorElement={<ErrorPage />}
				/>
				<Route path="/client-dashboard">
					<Route
						path="/client-dashboard/new-inquiry"
						element={<VisitInquiry />}
					/>
				</Route>
				<Route path="/auth">
					<Route path="/auth/" element={<AuthIndex />} />
					<Route path="/auth/login" element={<Login />} />
					<Route path="/auth/register" element={<Register />} />
				</Route>
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</div>
	);
};

export default Index;
