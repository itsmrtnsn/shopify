import CustomerAvatar from './CustomerAvatar';
const customerInfo = {
  email: 'itsmrtnsnoscold@gmail.com',
  gender: 'Male',
  membership: 'Gold',
  phone: '2394740404848',
  birthDate: 'march 29 20001',
  shippingAdress: 'delmas 31 rue jacques 1er',
};
const CustomerInfo = () => {
  return (
    <div className='text-sm border rounded-md space-y-3 py-2 px-3'>
      <CustomerAvatar />
      <div className='my-2'>
        <p className=''>Email</p>
        <p className=' text-zinc-200'>{customerInfo.email}</p>
      </div>
      <div className='my-2'>
        <p className=''>Phone Number</p>
        <p className=' text-zinc-200'>{customerInfo.phone}</p>
      </div>
      <div className='my-2'>
        <p className=''>Birth Date</p>
        <p className=' text-zinc-200'>{customerInfo.birthDate}</p>
      </div>
      <div className='my-2'>
        <p className=''>Gender</p>
        <p className='text-zinc-200'>{customerInfo.gender}</p>
      </div>
      <div className='my-2'>
        <p className=''>Membership</p>
        <p className=' text-zinc-200'>{customerInfo.membership}</p>
      </div>
      <div className='my-2'>
        <p className=''>Shipping Adress</p>
        <p className='text-zinc-200'>{customerInfo.shippingAdress}</p>
      </div>
    </div>
  );
};
export default CustomerInfo;
