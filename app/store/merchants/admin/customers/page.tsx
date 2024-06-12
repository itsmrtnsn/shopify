import Search from '@/app/store/components/Search';
import CustomerTable from './CustomerTable';
import GenderFilter from './GenderFilter';
import MembershipFilter from './MembershipFilter';
import PageFilter from './PageFilter';
import ResetQueryParams from '@/app/store/components/ResetQueryParams';

const CustomerPage = () => {
  return (
    <div className='border rounded-md'>
      <div className='h-[4rem] flex items-center justify-between px-3'>
        <div className='flex items-center gap-3 '>
          <Search placeolder='Search Customers...' />
          <ResetQueryParams />
        </div>
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
