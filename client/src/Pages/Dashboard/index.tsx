import {
  Bell,
  ChevronDown,
  ClipboardList,
  Download,
  HomeIcon,
  InfoIcon,
  LogOut,
  Package,
  Plus,
  SearchIcon,
  Settings,
  Umbrella,
  Users,
} from 'lucide-react';
import CustomButton from '../../Components/common/CustomButton';
import NavItem from '../../Components/common/NavItem';
import { EventCalendar } from '../../Components/dashboard/EventCalendar';
import InfoCard from '../../Components/dashboard/InfoCard';
import { PatientChart } from '../../Components/dashboard/PatientChart';
import PatientTable from '../../Components/dashboard/PatientTable';
import { Card } from '../../Components/ui/card';
import LogoPNG from '../../assets/Logo.png';

const Dashboard = () => {
  return (
    <div className="bg-secondary min-h-screen w-full grid grid-cols-1 md:grid-cols-[60px_1fr] lg:grid-cols-[250px_1fr]">
      {/* Sidebar */}
      <aside className="hidden md:block">
        <div className="fixed md:w-[60px] lg:w-[250px] h-full flex flex-col py-4 gap-4">
          {/* Sidebar Header */}
          <div className="flex items-center border-b p-4">
            <a href="/" className="flex items-center justify-between gap-2">
              <img
                src={LogoPNG}
                alt="HealthSync's Logo"
                draggable={false}
                className="w-10 h-10 object-contain"
              />
              <div className="hidden lg:block text-[12px]">
                <p className="font-semibold">Hassan Musa</p>
                <p className="font-light">Metro General Hospital</p>
              </div>
            </a>
            <ChevronDown size={16} className="hidden lg:block ml-auto" />
          </div>

          {/* Navigation */}
          <nav className="flex flex-col max-lg:items-center lg:px-4 space-y-1.5">
            <div className="max-lg:hidden relative">
              <SearchIcon
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                size={16}
              />

              <input
                placeholder="Search"
                className="pl-8 h-10 w-full border rounded-lg text-sm bg-input placeholder:text-gray-500"
              />
            </div>
            <NavItem
              href="#"
              icon={<HomeIcon strokeWidth={1} className="h-5 w-5" />}
              label="Dashboard"
            />
            <NavItem
              href="#"
              icon={<ClipboardList strokeWidth={1} className="h-5 w-5" />}
              label="Appointments"
              badgeCount={12}
            />
            <NavItem
              href="#"
              icon={<Package strokeWidth={1} className="h-5 w-5" />}
              label="Emergency cases"
              isActive={true}
            />
            <NavItem
              href="#"
              icon={<Users strokeWidth={1} className="h-5 w-5" />}
              label="Patient management"
            />
            <NavItem
              href="#"
              icon={<Bell strokeWidth={1} className="h-5 w-5" />}
              label="Notifications"
              badgeCount={4}
            />
            <NavItem
              href="#"
              icon={<Umbrella strokeWidth={1} className="h-5 w-5" />}
              label="Insurance management"
            />
          </nav>

          {/* Sidebar Footer Nav */}
          <nav className="mt-auto flex flex-col max-lg:items-center lg:p-4 space-y-1">
            <NavItem
              href="#"
              icon={<LogOut strokeWidth={1} className="h-5 w-5" />}
              label="Logout"
            />
            <NavItem
              href="#"
              icon={<Settings strokeWidth={1} className="h-5 w-5" />}
              label="Settings"
            />
            <NavItem
              href="#"
              icon={<InfoIcon strokeWidth={1} className="h-5 w-5" />}
              label="Help"
            />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col p-4">
        <main className="flex flex-1 flex-col bg-white border rounded-lg gap-4 lg:gap-6">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex flex-col">
              <span className="font-medium">Hey Hassan!</span>
              <span className="text-muted-foreground text-xs font-normal">
                Sunday, September 12, 2024
              </span>
            </div>
            <div className="flex gap-2">
              <CustomButton label="Add patient" icon={<Plus size={18} />} />
              <CustomButton
                label="Generate Report"
                icon={<Download size={18} />}
                variant="secondary"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 *:min-h-44">
            <InfoCard
              title="Total visitors"
              reportLink="View report"
              mainValue="628"
              percentageChange="+9.24%"
              footerText="Total number of visitors within the past month"
            />
            <InfoCard
              title="Total visitors"
              reportLink="View report"
              mainValue="628"
              percentageChange="+9.24%"
              statusList={[
                '22 Admitted',
                '41 Discharged',
                '19 Consultations',
                '16 Inpatients',
              ]}
              footerText="Total number of visitors within the past month"
            />
            <InfoCard
              title="Total visitors"
              reportLink="View report"
              mainValue="628"
              percentageChange="+9.24%"
              footerText="Total number of visitors within the past month"
            />
            <InfoCard
              title="Total visitors"
              reportLink="View report"
              mainValue="628"
              percentageChange="+9.24%"
              statusList={[
                '22 Admitted',
                '41 Discharged',
                '19 Consultations',
                '16 Inpatients',
              ]}
              footerText="Total number of visitors within the past month"
            />
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 mx-4">
            <PatientChart />
            <Card className="col-span-3">
              <EventCalendar />
            </Card>
          </div>
          <div className="p-4">
            <PatientTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
