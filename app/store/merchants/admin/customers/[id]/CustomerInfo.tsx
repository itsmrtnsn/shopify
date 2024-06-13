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
    <div className='text-sm border rounded-md py-3 px-3'>
      <CustomerAvatar />
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold '>Email</p>
        <p className=' text-zinc-200'>{customerInfo.email}</p>
      </div>
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold'>Phone Number</p>
        <p className=' text-zinc-200'>{customerInfo.phone}</p>
      </div>
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold'>Birth Date</p>
        <p className=' text-zinc-200'>{customerInfo.birthDate}</p>
      </div>
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold'>Gender</p>
        <p className=' text-zinc-200'>{customerInfo.gender}</p>
      </div>
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold'>Membership</p>
        <p className=' text-zinc-200'>{customerInfo.membership}</p>
      </div>
      <div className='my-2'>
        <p className='text-zinc-500 font-semibold'>Shipping Adress</p>
        <p className=' text-zinc-200'>{customerInfo.shippingAdress}</p>
      </div>
    </div>
  );
};
export default CustomerInfo;
