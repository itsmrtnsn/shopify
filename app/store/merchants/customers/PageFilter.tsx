import { Button } from '@/components/ui/button';
import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  CircleChevronRight,
} from 'lucide-react';

const PageFilter = () => {
  return (
    <div className='border-t flex items-center justify-between h-[3.5rem] px-3'>
      <p className='flex items-center text-xs text-zinc-700'>
        Total Customers: 125
      </p>
      <div className='flex items-center gap-3'>
        <Button variant='outline' className='text-xs font-normal'>
          <ArrowBigLeftDash strokeWidth={0.75} />
          Previous
        </Button>
        <Button variant='outline'>1</Button>
        <Button variant='outline'>2</Button>
        <Button variant='outline'>3</Button>
        <Button variant='outline'>
          <CircleChevronRight strokeWidth={0.5} />{' '}
        </Button>
        <Button variant='outline' className='text-xs font-normal'>
          Next <ArrowBigRightDash strokeWidth={0.75} />
        </Button>
      </div>
    </div>
  );
};
export default PageFilter;
