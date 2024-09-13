import 'primereact/resources/primereact.min.css'; //core css
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import { Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './Authentication/Login';
import Register from './Authentication/Register';
import Dashboard from './Dashboard';
import ErrorPage from './Error';
import Home from './Home';

// import "primeicons/primeicons.css"; //icons
// import "primeflex/primeflex.css"; // flex

const Index = () => {
  return (
    <div className="min-h-screen h-full">
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Index;
