import { DateRangePicker } from '@/app/store/components/DateRangePicker';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, PackageCheck, PackageSearch, PackageX } from 'lucide-react';

const orderOverview = [
  {
    title: 'Total Oders',
    icon: Package,
    totalItems: '4200',
    description: 'total orders for toady',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Completed Oders',
    icon: PackageCheck,
    totalItems: '0',
    description: 'Completed orders for toady',
    iconColor: 'text-emerald-400',
  },
  {
    title: 'Proccessing Orders',
    icon: PackageSearch,
    totalItems: '50',
    description: 'Proccessing orders for toady',
    iconColor: 'text-yellow-400',
  },
  {
    title: 'Canceld Orders',
    icon: PackageX,
    totalItems: '400',
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
          <Card key={order.title} className='shadow-none'>
            <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
              <CardTitle className='text-sm font-medium'>
                {order.title}
              </CardTitle>
              <order.icon
                size={30}
                strokeWidth={0.75}
                className={order.iconColor}
              />
            </CardHeader>
            <CardContent>
              <div className='text-2xl font-bold'>
                {parseInt(order.totalItems)}
              </div>
              <p className='text-xs text-muted-foreground'>
                {order.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
export default OrdersOverview;
