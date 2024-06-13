import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import CustomerDetailHeader from './CustomerDetailHeader';
import { BadgeDollarSign, Package, PackageCheck, PackageX } from 'lucide-react';

const CustomerOrderOverView = () => {
  return (
    <div>
      <CustomerDetailHeader />
      <div className='mt-5 grid grid-cols-4 gap-5'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Cost</CardTitle>
            <BadgeDollarSign size={28} strokeWidth={0.5} />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>$45,231.89</div>
            <p className='text-xs text-muted-foreground'>
              Total spend last 365 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Total Orders</CardTitle>
            <Package size={28} strokeWidth={0.5} />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold flex items-center gap-1.5'>
              130 <p className='border w-4 h-4 rounded-full bg-amber-600'></p>
            </div>
            <p className='text-xs text-muted-foreground'>
              Total Orders last 365 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Completed</CardTitle>
            <PackageCheck size={28} strokeWidth={0.5} />{' '}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold flex items-center gap-1.5'>
              100 <p className='border w-4 h-4 rounded-full bg-green-600'></p>
            </div>
            <p className='text-xs text-muted-foreground'>
              Completed Orders last 365 days
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>Canceld</CardTitle>
            <PackageX size={28} strokeWidth={0.5} />{' '}
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold flex items-center gap-1.5'>
              30 <p className='border w-4 h-4 rounded-full bg-red-600'></p>
            </div>
            <p className='text-xs text-muted-foreground'>
              Canceld Orders last 365 days
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default CustomerOrderOverView;
