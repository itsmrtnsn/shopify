import DeliveryOverView from './DeliveryOverView';
import Search from '@/app/store/components/Search';
import { Button } from '@/components/ui/button';
import DeliveryTable from './DeliveryTable';
import Pagination from '@/app/store/components/Pagination';

const DeliveryFilterButtons = [
  { code: 'all_deliveries', label: 'All Deliveries' },
  { code: 'delivered', label: 'Delivered' },
  { code: 'Pending', label: 'Pending' },
  { code: 'en_route', label: 'En Route' },
];

const DeliveryPage = () => {
  return (
    <div className='space-y-7'>
      <DeliveryOverView />
      <div className='border p-3 rounded-md'>
        <div className='flex items-center justify-between gap-5 mb-3 '>
          <Search />
          <div className='flex items-center gap-2'>
            {DeliveryFilterButtons.map((button) => (
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
        <DeliveryTable />
        <Pagination
          totalItems={0}
          pageSize={0}
          currentPage={0}
          paginationFor='Deliveries'
        />
      </div>
    </div>
  );
};
export default DeliveryPage;
