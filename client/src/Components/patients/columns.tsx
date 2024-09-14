import { statuses } from '@/data/patients';
import { ColumnDef } from '@tanstack/react-table';

export type Patient = {
  id: string;
  'patient name': string;
  gender: string;
  age: number;
  'date admitted'?: string;
  'time admitted'?: string;
  status?: 'stable' | 'recovery' | 'in surgery' | 'critical' | 'unavailable';
  'room no': string;
  'last visit'?: string;
  'insurance no'?: string;
  condition?: string;
};

export const inPatientColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'id',
    header: 'Patient ID',
  },
  {
    accessorKey: 'patient name',
    header: 'Patient Name',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  { accessorKey: 'time admitted', header: 'Time Admitted', enableHiding: true },
  {
    accessorKey: 'date admitted',
    header: 'Date Admitted',
    cell: ({ row }) => {
      console.log(row);
      const dateAdmitted = row.getValue('date admitted');
      const timeAdmitted = row.getValue('time admitted') || 'time admitted';

      if (!dateAdmitted || !timeAdmitted) {
        return null;
      }

      return `${dateAdmitted} ${timeAdmitted}`;
    },
  },
  {
    accessorKey: 'room no',
    header: 'Room No.',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue('status')
      );

      if (!status) {
        return null;
      }

      return (
        <div className="flex gap-1 items-center">
          <span className={`h-1.5 w-1.5 rounded-full ${status.color}`}></span>
          <span>{status.label}</span>
        </div>
      );
    },
  },
];

// Define columns for AllPatients
export const allPatientColumns: ColumnDef<Patient>[] = [
  {
    accessorKey: 'id',
    header: 'Patient ID',
  },
  {
    accessorKey: 'patient name',
    header: 'Patient Name',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'last visit',
    header: 'Last Visit',
  },
  {
    accessorKey: 'insurance no',
    header: 'Insurance No.',
  },
  {
    accessorKey: 'condition',
    header: 'Condition',
  },
  {
    accessorKey: 'room no',
    header: 'Room No.',
  },
];
