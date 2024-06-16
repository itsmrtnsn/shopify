import TableRows from '@/app/store/admin/components/TableRows';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DeliveryStatus, { DeliveryStatuses } from '../components/DeliveryStatus';

const deliveries = [
  {
    OrderId: 'kkvsh',
    receiver: 'John Doe',
    OrderDate: '29 march 2001',
    shippingAddress: 'Haiti - delmas 31 rue jacques 1er',
    deliveryStatus: 'DELIVERED',
  },
  {
    OrderId: 'kkvsh',
    receiver: 'John Doe',
    OrderDate: '29 march 2001',
    shippingAddress: 'Haiti - delmas 31 rue jacques 1er',
    deliveryStatus: 'RETURNED',
  },
  {
    OrderId: 'kkvsh',
    receiver: 'John Doe',
    OrderDate: '29 march 2001',
    shippingAddress: 'Haiti - delmas 31 rue jacques 1er',
    deliveryStatus: 'PENDING',
  },
  {
    OrderId: 'kkvsh',
    receiver: 'John Doe',
    OrderDate: '29 march 2001',
    shippingAddress: 'Haiti - delmas 31 rue jacques 1er',
    deliveryStatus: 'DELIVERED',
  },
  {
    OrderId: 'kkvsh',
    receiver: 'John Doe',
    OrderDate: '29 march 2001',
    shippingAddress: 'Haiti - delmas 31 rue jacques 1er',
    deliveryStatus: 'ON_WAY',
  },
];

const deliveryHeaders = [
  { code: 'order_id', label: 'Order ID' },
  { code: 'order_date', label: 'Order Date' },
  { code: 'receiver', label: 'Receiver' },
  { code: 'delivery_status', label: 'Delivery Status' },
  { code: 'shipping_address', label: 'Shipping Address' },
];

const DeliveryTable = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRows
          headers={deliveryHeaders}
          notSorted={['order_id', 'shipping_address']}
        />
      </TableHeader>
      <TableBody className='text-xs'>
        {deliveries.map((delivery) => (
          <TableRow className='h-12 hover:bg-card' key={delivery.OrderId}>
            <TableCell>{delivery.OrderId}</TableCell>
            <TableCell>{delivery.OrderDate}</TableCell>
            <TableCell>{delivery.receiver}</TableCell>
            <TableCell>
              <DeliveryStatus
                status={delivery.deliveryStatus as DeliveryStatuses}
              />
            </TableCell>
            <TableCell>{delivery.shippingAddress}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DeliveryTable;
