import TableRows from '@/app/store/admin/components/TableRows';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DeliveryStatus, {
  DeliveryStatuses,
} from '../../components/DeliveryStatus';
import OrderStatusBadge, {
  OrderStatuses,
} from '../../components/OrderStatusBadge';

const orders = [
  {
    orderId: 'GHIJKL',
    orderDate: 'April 10 2001',
    orderStatus: 'PROCCESING',
    paymentMethod: 'PayPal',
    deliveryStatus: 'DELIVERED',
    totalPrice: 150.75,
  },
  {
    orderId: 'MNOPQR',
    orderDate: 'May 15 2001',
    orderStatus: 'CANCELED',
    paymentMethod: 'Debit Card',
    deliveryStatus: 'DELIVERED',
    totalPrice: 0.0,
  },
  {
    orderId: 'STUVWX',
    orderDate: 'June 20 2001',
    orderStatus: 'REFUNDED',
    paymentMethod: 'Credit Card',
    deliveryStatus: 'ON_WAY',
    totalPrice: 450.0,
  },
  {
    orderId: 'YZABCD',
    orderDate: 'July 25 2001',
    orderStatus: 'COMPLETED',
    paymentMethod: 'Bank Transfer',
    deliveryStatus: 'PENDING',
    totalPrice: 325.99,
  },
  {
    orderId: 'EFGHIJ',
    orderDate: 'August 30 2001',
    orderStatus: 'PROCCESING',
    paymentMethod: 'Credit Card',
    deliveryStatus: 'RETURNED',
    totalPrice: 275.5,
  },
];
const customerOrderHeaders = [
  { code: 'order_id', label: 'Order ID' },
  { code: 'order_date', label: 'Order Date' },
  { code: 'order_status', label: 'Order Status' },
  { code: 'payment_status', label: 'Payment Status' },
  { code: 'delivery_status', label: 'Delivery Status' },
  { code: 'total_price', label: 'Total Price' },
];
const CustomerOrderTable = () => {
  return (
    <Table className='border'>
      <TableHeader>
        <TableRows headers={customerOrderHeaders} notSorted={['order_id']} />
      </TableHeader>
      <TableBody className='text-xs'>
        {orders.map((order) => (
          <TableRow className='h-12 hover:bg-card' key={order.orderId}>
            <TableCell>{order.orderId}</TableCell>
            <TableCell>{order.orderDate}</TableCell>
            <TableCell>
              <OrderStatusBadge status={order.orderStatus as OrderStatuses} />
            </TableCell>
            <TableCell>{order.paymentMethod}</TableCell>
            <TableCell>
              <DeliveryStatus
                status={order.deliveryStatus as DeliveryStatuses}
              />
            </TableCell>
            <TableCell>${order.totalPrice}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CustomerOrderTable;
