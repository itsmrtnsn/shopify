import Pagination from '@/app/store/components/Pagination';
import ResetQueryParams from '@/app/store/components/ResetQueryParams';
import Search from '@/app/store/components/Search';
import CustomerTable from './CustomerTable';
import GenderFilter from './GenderFilter';
import MembershipFilter from './MembershipFilter';
interface Props {
  searchParams: { page: string };
}
const CustomerPage = ({ searchParams: { page } }: Props) => {
  return (
    <div>
      <div className='border rounded-md'>
        <div className='h-[4rem] flex items-center justify-between px-3'>
          <div className='flex items-center gap-3 '>
            <Search placeolder='Search Customers...' />
            <ResetQueryParams />
          </div>
          <div className='flex items-center gap-3'>
            <MembershipFilter />
            <GenderFilter />
          </div>
        </div>
        <CustomerTable />
        <Pagination
          paginationFor='Customers'
          totalItems={100}
          pageSize={10}
          currentPage={parseInt(page) ? parseInt(page) : 1}
        />
      </div>
    </div>
  );
};
export default CustomerPage;
