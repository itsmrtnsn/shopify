import { Button } from '@/components/ui/button';
import {
  BellIcon,
  FaceIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  SunIcon,
} from '@radix-ui/react-icons';
import MerchantAdministratorList from './merchant-administrator-list';

const Header = () => {
  return (
    <section className='font-light shadow-sm mb-5'>
      <div className='flex items-center justify-between h-14 mx-7'>
        <div className='flex items-center gap-7'>
          <p className='font-semibold text-[dodgerblue]'>InStore Admin</p>
          <Button
            variant='outline'
            className='w-[14rem] justify-between font-light px-3 shadow-none text-zinc-700 text-sm tracking-normal'
          >
            <span>Search...</span>
            <span>
              <MagnifyingGlassIcon />
            </span>
          </Button>
        </div>
        <div className='flex items-center gap-5'>
          <SunIcon className='w-4 h-4' />
          <div className='relative'>
            <BellIcon className='w-5 h-5 text-zinc-500' />
            <span className='absolute text-[10px] font-medium top-0 left-2 border rounded-full w-3.5 h-3.5 flex justify-center items-center bg-[dodgerblue] text-white '>
              3
            </span>
          </div>
          <MerchantAdministratorList />
        </div>
      </div>
    </section>
  );
};
export default Header;
