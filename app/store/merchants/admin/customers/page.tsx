import { Input } from '@/components/ui/input';
import CustomerTable from './CustomerTable';
import GenderFilter from './GenderFilter';
import MembershipFilter from './MembershipFilter';
import PageFilter from './PageFilter';
import Search from '@/app/store/components/Search';

const CustomerPage = () => {
  return (
    <div className='border rounded-md'>
      <div className='h-[4rem] flex items-center justify-between px-3'>
        <Search placeolder='Search Customers...' />
        <div className='flex items-center gap-5'>
          <MembershipFilter />
          <GenderFilter />
        </div>
      </div>
      <CustomerTable />
      <PageFilter />
    </div>
  );
};
export default CustomerPage;
