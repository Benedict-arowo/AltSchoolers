import CustomButton from '@/components/common/CustomButton';
import InfoCard from '@/components/dashboard/InfoCard';
import { PatientChart } from '@/components/dashboard/PatientChart';
import { Card } from '@/components/ui/card';
import { Download, Plus } from 'lucide-react';
import MainLayout from './MainLayout';

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex flex-col">
          <span className="font-medium">Hey Hassan!</span>
          <span className="text-muted-foreground text-xs">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 *:min-h-44">
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
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mx-4">
        <PatientChart />
        <Card className="col-span-3">
          <div className="bg-slate-400"></div>
        </Card>
      </div>
      <div className="p-4">
        {/* <DataTable columns={columns} data={patientData} /> */}
      </div>
    </MainLayout>
  );
};

export default Dashboard;
