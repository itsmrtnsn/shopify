import Pagination from '@/app/store/components/Pagination';
import CustomerOrderTable from './CustomerOrderTable';
import { Button } from '@/components/ui/button';
import Search from '@/app/store/components/Search';
const custonerOrdersButtons = [
  { code: 'all_orders', label: 'All Orders' },
  { code: 'completed', label: 'Completed' },
  { code: 'proccessing', label: 'Processing' },
  { code: 'canceld', label: 'Canceld' },
];
const CustomerOrders = () => {
  return (
    <div className='border px-2 rounded-md'>
      <div className='flex items-center justify-between gap-5'>
        <Search />
        <div className='flex items-center py-2 gap-2'>
          {custonerOrdersButtons.map((button) => (
            <Button
              key={button.code}
              variant='outline'
              className='hover:bg-primary'
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
      <div>
        <CustomerOrderTable />
        <Pagination
          totalItems={10}
          pageSize={0}
          currentPage={0}
          paginationFor='Orders'
        />
      </div>
    </div>
  );
};
export default CustomerOrders;
