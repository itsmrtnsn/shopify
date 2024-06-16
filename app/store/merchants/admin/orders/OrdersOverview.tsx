import StatsCard from '@/app/store/admin/components/StatsCard';
import { DateRangePicker } from '@/app/store/components/DateRangePicker';

const orderOverview = [
  {
    title: 'Total Oders',
    icon: 'package',
    totalItems: '9',
    description: 'total orders for toady',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Completed Oders',
    icon: `package-check`,
    totalItems: '1',
    description: 'Completed orders for toady',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Proccessing Orders',
    icon: 'package-search',
    totalItems: '11',
    description: 'Proccessing orders for toady',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Canceld Orders',
    icon: 'package-x',
    totalItems: '2',
    description: 'Canceled orders for toady',
    iconColor: 'text-red-400',
  },
];

const OrdersOverview = () => {
  return (
    <div>
      <div className='flex items-center justify-end my-3'>
        <DateRangePicker />
      </div>
      <div className='mt-5 grid grid-cols-4 gap-5'>
        {orderOverview.map((order) => (
          <StatsCard
            title={order.title}
            description={order.description}
            stats={parseInt(order.totalItems)}
            iconColor={order.iconColor}
            icon={order.icon}
          />
        ))}
      </div>
    </div>
  );
};
export default OrdersOverview;
