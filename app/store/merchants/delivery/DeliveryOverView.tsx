import StatsCard from '@/app/store/admin/components/StatsCard';
import { DateRangePicker } from '@/app/store/components/DateRangePicker';

const deliveries = [
  {
    title: 'Total Delivery',
    description: 'total delivery for Today',
    totalItems: '4200',
    icon: 'truck',
    iconColor: 'text-sky-400',
  },
  {
    title: 'Delivered',
    description: 'total delivery for Today',
    totalItems: '12',
    icon: 'check-check',
    iconColor: 'text-green-400',
  },
  {
    title: 'Pending',
    description: 'total delivery for Today',
    totalItems: '12',
    icon: 'circle-dot-dashed',
    iconColor: 'text-orange-400',
  },
  {
    title: 'En Route',
    description: 'total delivery for Today',
    totalItems: '120',
    icon: 'route',
    iconColor: 'text-teal-400',
  },
];

const DeliveryOverView = () => {
  return (
    <div>
      <div className='flex items-center justify-end my-3'>
        <DateRangePicker />
      </div>
      <div className='mt-5 grid grid-cols-4 gap-5'>
        {deliveries.map((order) => (
          <StatsCard
            title={order.title}
            description={order.description}
            stats={order.totalItems}
            iconColor={order.iconColor}
            icon={order.icon}
          />
        ))}
      </div>
    </div>
  );
};
export default DeliveryOverView;
