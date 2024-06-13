import { DateRangePicker } from '@/app/store/components/DateRangePicker';
import { Button } from '@/components/ui/button';
import { ChevronLeft, EllipsisVertical } from 'lucide-react';
import Link from 'next/link';

const CustomerDetailHeader = () => {
  return (
    <section className='h-14 flex items-center justify-between '>
      <div className='flex items-center px-1 gap-2'>
        <Link href='/store/merchants/admin/customers' legacyBehavior>
          <Button className='py-4 px-1' variant='outline'>
            <ChevronLeft size={30} strokeWidth={1} />
          </Button>
        </Link>
        <div>
          <p className='text-xs text-zinc-500'>Back To Customers</p>
          <p className='text-sm font-medium'>Mortensen Ulysse</p>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <DateRangePicker />
        <Button size='icon' variant='outline'>
          <EllipsisVertical size={28} strokeWidth={0.5} />
        </Button>
      </div>
    </section>
  );
};
export default CustomerDetailHeader;
