import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Ellipsis } from 'lucide-react';

const CustomerAction = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Ellipsis className='cursor-pointer' size={30} strokeWidth={0.75} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='mr-6 mt-3'>
        <DropdownMenuLabel>Mortensen Ulysse</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Detail</DropdownMenuItem>
        <DropdownMenuItem>All Orders</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default CustomerAction;
