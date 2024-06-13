import CustomerInfo from './CustomerInfo';
import CustomerOrderOverView from './CustomerOrderOverView';
import CustomerOrders from './CustomerOrders';

const customerInfo = {
  email: 'itsmrtnsnoscold@gmail.com',
  gender: 'Male',
  membership: 'Gold',
  phone: '2394740404848',
  birthDate: 'march 29 20001',
  shippingAdress: 'delmas 31 rue jacques 1er',
};

const CustomerDetailPage = () => {
  return (
    <div>
      <CustomerOrderOverView />
      <div className='grid grid-cols-3 mt-7 gap-3'>
        <div className='col-span-1'>
          <CustomerInfo />
        </div>
        <div className='col-span-2'>
          <CustomerOrders />
        </div>
      </div>
    </div>
  );
};
export default CustomerDetailPage;
