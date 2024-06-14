import Search from '@/app/store/components/Search';
import OrderTable from './OrderTable';
import OrdersOverview from './OrdersOverview';
import { Button } from '@/components/ui/button';
import Pagination from '@/app/store/components/Pagination';
const custonerOrdersButtons = [
  { code: 'all_orders', label: 'All Orders' },
  { code: 'completed', label: 'Completed' },
  { code: 'proccessing', label: 'Processing' },
  { code: 'canceld', label: 'Canceld' },
];
const OrdersPage = () => {
  return (
    <div className='space-y-7'>
      <OrdersOverview />
      <div className='border p-3 rounded-md'>
        <div className='flex items-center justify-between gap-5 mb-3 '>
          <Search />
          <div className='flex items-center gap-2'>
            {custonerOrdersButtons.map((button) => (
              <Button
                key={button.code}
                variant='outline'
                className='shadow-none font-medium text-xs'
              >
                {button.label}
              </Button>
            ))}
          </div>
        </div>
        <OrderTable />
        <Pagination
          totalItems={0}
          pageSize={0}
          currentPage={0}
          paginationFor='Orders'
        />
      </div>
    </div>
  );
};
export default OrdersPage;
