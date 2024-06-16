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

interface Props {
  headers: { code: string; label: string }[];
  notSorted?: string[];
}

const TableRows = ({ headers, notSorted }: Props) => {
  return (
    <TableRow className='h-12 text-xs tracking-wide font-semibold bg-card hover:bg-card'>
      {headers.map((header) => (
        <TableHead
          key={header.code}
          className='hover:text-gray-800 dark:hover:text-white transition-colors'
        >
          {notSorted?.includes(header.code) ? (
            header.label
          ) : (
            <DropdownMenu>
              <DropdownMenuTrigger className='flex gap-1 hover:text-g-card'>
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
    </TableRow>
  );
};
export default TableRows;
