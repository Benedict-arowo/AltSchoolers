import NavItem from '@/components/common/NavItem';
import {
  Bell,
  ChevronDown,
  ClipboardList,
  Home,
  Info,
  LogOut,
  Package,
  Settings,
  Umbrella,
  Users,
} from 'lucide-react';
import { ReactNode, useState } from 'react';
import LogoPNG from '../../assets/Logo.png';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="w-full mx-auto max-w-7xl bg-secondary flex">
      <aside
        className={`h-screen transition-transform transform pt-8 pl-4 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0`}
      >
        <div className="h-full max-sm:hidden flex sm:flex-col ">
          <div className="flex h-14 justify-between items-center border-b">
            <a href="/" className="flex items-center gap-2">
              <img
                src={LogoPNG}
                alt="HealthSync's Logo"
                draggable={false}
                className="w-10 h-10"
              />
              <div className="hidden lg:block text-[12px]">
                <p className="font-semibold">Hassan Musa</p>
                <p className="font-light">Metro General Hospital</p>
              </div>
            </a>
            <button className="hidden lg:block h-8 w-8">
              <ChevronDown size={16} />
              <span className="sr-only">Change Hospital</span>
            </button>
          </div>

          <nav className="grid items-start text-sm space-y-2">
            <NavItem
              href="#"
              icon={<Home strokeWidth={1.25} className="h-7 w-7" />}
              label="Dashboard"
            />
            <NavItem
              href="#"
              icon={<ClipboardList strokeWidth={1.25} className="h-7 w-7" />}
              label="Appointments"
              badgeCount={12}
            />
            <NavItem
              href="#"
              icon={<Package strokeWidth={1.25} className="h-7 w-7" />}
              label="Emergency cases"
              isActive={true}
            />
            <NavItem
              href="#"
              icon={<Users strokeWidth={1.25} className="h-7 w-7" />}
              label="Patient management"
            />
            <NavItem
              href="#"
              icon={<Bell strokeWidth={1.25} className="h-7 w-7" />}
              label="Notifications"
              badgeCount={4}
            />
            <NavItem
              href="#"
              icon={<Umbrella strokeWidth={1.25} className="h-7 w-7" />}
              label="Insurance management"
            />
          </nav>

          <nav className="mt-auto space-y-2">
            <NavItem
              href="#"
              icon={<LogOut strokeWidth={1.25} className="h-7 w-7" />}
              label="Logout"
            />
            <NavItem
              href="#"
              icon={<Settings strokeWidth={1.25} className="h-7 w-7" />}
              label="Settings"
            />
            <NavItem
              href="#"
              icon={<Info strokeWidth={1.25} className="h-7 w-7" />}
              label="Help"
            />
          </nav>
        </div>
      </aside>
      <main className="flex-1 sm:m-4 rounded-md bg-white">{children}</main>
    </div>
  );
};

export default MainLayout;
