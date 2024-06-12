import { Input } from '@/components/ui/input';
import UserTable from './UserTable';

const MerchantUsersPage = () => {
  return (
    <div className='border rounded-md'>
      <div className='h-[4rem] flex items-center px-3'>
        <Input
          className='shadow-none text-xs max-w-[20rem]'
          placeholder='Search Users....'
        />
      </div>
      <UserTable />
    </div>
  );
};
export default MerchantUsersPage;
