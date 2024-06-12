import { Checkbox } from '@/components/ui/checkbox';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { TableHead, TableRow } from '@/components/ui/table';
import { ArrowDownAZ, ArrowDownZA, ChevronsUpDown } from 'lucide-react';

const tableHeaders = [
  { code: 'User', label: 'User' },
  { code: 'first_name', label: 'First Name' },
  { code: 'last_name', label: 'Last Name' },
  { code: 'gender', label: 'Gender' },
  { code: 'phone_number', label: 'Phone Number' },
  { code: 'membership', label: 'Membership' },
  { code: 'total', label: 'Total Orders' },
];
const CustomerTableHead = () => {
  return (
    <TableRow className='h-12'>
      <TableHead>
        <Checkbox />
      </TableHead>
      {tableHeaders.map((header) => (
        <TableHead key={header.code}>
          {header.code === 'User' ? (
            'User Profile'
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className='flex gap-1 hover:text-black transition-all'>
                {header.label}
                <ChevronsUpDown size={14} strokeWidth={1} />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel className='text-center text-zinc-600'>
                  Order By
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='flex gap-3 text-xs'>
                  <ArrowDownAZ size={16} strokeWidth={1} />
                  Asc Order
                </DropdownMenuItem>
                <DropdownMenuItem className='text-xs flex gap-3'>
                  <ArrowDownZA size={16} strokeWidth={1} />
                  Desc Order
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </TableHead>
      ))}
      <TableHead>Actions</TableHead>
    </TableRow>
  );
};
export default CustomerTableHead;
