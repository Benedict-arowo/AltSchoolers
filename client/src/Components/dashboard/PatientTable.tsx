import {
  allPatientColumns,
  inPatientColumns,
  Patient,
} from '@/components/patients/columns';

import { DataTable } from '@/components/patients/data-table';
import { patientData } from '@/data/patients';
import { MixerHorizontalIcon } from '@radix-ui/react-icons';
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const PatientTable = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'inpatients'>('all');
  const [columns, setColumns] =
    useState<ColumnDef<Patient>[]>(allPatientColumns);
  const [filteredData, setFilteredData] = useState<any>(patientData);
  const [globalFilter, setGlobalFilter] = useState<string>('');

  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { globalFilter },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: 'includesString',
  });

  // Handle filter toggle between All Patients and Inpatients
  const handleFilterToggle = (filter: 'all' | 'inpatients') => {
    setActiveFilter(filter);

    if (filter === 'all') {
      setColumns(allPatientColumns);
      setFilteredData(patientData);
    } else if (filter === 'inpatients') {
      setColumns(inPatientColumns);
      setFilteredData(
        patientData.filter((patient) => patient['date admitted'])
      );
    }
  };

  return (
    <div className="space-y-4 text-sm rounded-lg border">
      <div className="flex items-center justify-between border-b h-14">
        <div className="h-full flex text-[#666666]">
          <span
            className={`h-full inline-flex items-center justify-center px-3 cursor-pointer transition-all duration-500 ${
              activeFilter === 'all'
                ? 'border-b-2 border-black text-black font-medium'
                : 'border-b-2 border-transparent'
            }`}
            onClick={() => handleFilterToggle('all')}
          >
            All patients
          </span>
          <span
            className={`h-full inline-flex items-center justify-center px-3 cursor-pointer transition-all duration-500 ${
              activeFilter === 'inpatients'
                ? 'border-b-2 border-black text-black font-medium'
                : 'border-b-2 border-transparent'
            }`}
            onClick={() => handleFilterToggle('inpatients')}
          >
            Inpatients
          </span>
        </div>

        <div className="p-2 flex items-center gap-2">
          <div className="relative">
            <SearchIcon
              className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500"
              size={16}
            />

            <input
              placeholder="Search for a patient"
              value={globalFilter}
              onChange={(event) => {
                console.log(event.target.value);
                setGlobalFilter(event.target.value);
              }}
              className="pl-8 h-8 bg-input rounded-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-opacity-50"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden sm:flex items-center border rounded-md py-2 px-3">
                <MixerHorizontalIcon className="mr-2 h-4 w-4" />
                Filter
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[150px]">
              {table
                .getAllColumns()
                .filter(
                  (column) =>
                    typeof column.accessorFn !== 'undefined' &&
                    column.getCanHide()
                )
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={table.getRowModel().rows.map((row) => row.original)}
      />
    </div>
  );
};

export default PatientTable;
