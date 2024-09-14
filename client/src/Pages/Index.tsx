import { Route, Routes } from 'react-router-dom';
import App from './App';
import AuthIndex from './Authentication/Index';
import Login from './Authentication/Login';
import ErrorPage from './Error';
// import Registration from "./Authentication/Registration";
import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import AboutUs from './About';
import Register from './Authentication/Register';
import RegisterUser from './Authentication/RegisterUser';
import VisitInquiry from './Client Dashboard/VisitInquiry';
import Dashboard from './Dashboard';

const Index = () => {
  return (
    <div className="min-h-screen h-full">
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/client-dashboard">
          <Route
            path="/client-dashboard/new-inquiry"
            element={<VisitInquiry />}
          />
        </Route>
        <Route path="/auth">
          <Route path="/auth/" element={<AuthIndex />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/user" element={<RegisterUser />} />
          <Route path="/auth/health-provider" element={<Register />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Index;
