import StatsCard from '@/app/store/admin/components/StatsCard';

const DeliveryPage = () => {
  return (
    <div>
      <StatsCard
        title='Total Oders'
        description='total orders for toady'
        stats='4200'
        iconColor='text-sky-400'
        icon='package'
      />
    </div>
  );
};
export default DeliveryPage;
