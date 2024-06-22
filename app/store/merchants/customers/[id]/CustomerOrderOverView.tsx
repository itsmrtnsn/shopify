import StatsCard from '@/app/store/admin/components/StatsCard';
import CustomerDetailHeader from './CustomerDetailHeader';
const orderOverview = [
  {
    title: 'Total Cost',
    icon: 'package',
    totalItems: '$45,231.89',
    description: 'total orders for toady',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Completed Oders',
    icon: `package-check`,
    totalItems: '0',
    description: 'Completed orders for toady',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Proccessing Orders',
    icon: 'package-search',
    totalItems: '50',
    description: 'Proccessing orders for toady',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Canceld Orders',
    icon: 'package-x',
    totalItems: '400',
    description: 'Canceled orders for toady',
    iconColor: 'text-red-400',
  },
];
const CustomerOrderOverView = () => {
  return (
    <div>
      <CustomerDetailHeader />
      <div>
        <div className='mt-5 grid grid-cols-4 gap-5'>
          {orderOverview.map((order) => (
            <StatsCard
              title={order.title}
              description={order.description}
              stats={parseInt(order.totalItems)}
              iconColor={order.iconColor}
              icon={order.icon}
              key={order.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default CustomerOrderOverView;
