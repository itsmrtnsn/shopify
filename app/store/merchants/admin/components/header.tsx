import { Button } from '@/components/ui/button';
import { BellIcon } from '@radix-ui/react-icons';
import { Search } from 'lucide-react';
import ThemeToggler from './theme-toggler';

const Header = () => {
  return (
    <section className='font-light shadow-sm dark:border-b bg-white'>
      <div className='flex items-center justify-between h-14 mx-3'>
        <Button
          variant='outline'
          className='w-[18rem]  justify-start font-light px-2 shadow-none text-zinc-700 text-sm tracking-normal'
        >
          <Search className='' strokeWidth={0.75} size={18} />
          <span>Search...</span>
        </Button>

        <div className='flex items-center gap-5'>
          <ThemeToggler />

          <div className='relative border p-1 rounded-full'>
            <BellIcon className='w-5 h-5' />
            <span className='absolute text-[10px] font-medium top-0 left-2 border rounded-full w-3.5 h-3.5 flex justify-center items-center bg-[dodgerblue] text-white '>
              3
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Header;
