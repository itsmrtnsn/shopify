import {
  Table,
  TableBody,
  TableCell,
  TableHead,
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
];

const DeliveryTable = () => {
  return (
    <Table className='border'>
      <TableHeader className='bg-muted/50 text-xs'>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Order Date</TableHead>
          <TableHead>Receiver</TableHead>
          <TableHead>Shipping Addresss</TableHead>
          <TableHead>Delivery Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='text-xs'>
        {deliveries.map((delivery) => (
          <TableRow className='h-12'>
            <TableCell>{delivery.OrderId}</TableCell>
            <TableCell>{delivery.OrderDate}</TableCell>
            <TableCell>{delivery.receiver}</TableCell>
            <TableCell>{delivery.shippingAddress}</TableCell>
            <TableCell>
              <DeliveryStatus
                status={delivery.deliveryStatus as DeliveryStatuses}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default DeliveryTable;
