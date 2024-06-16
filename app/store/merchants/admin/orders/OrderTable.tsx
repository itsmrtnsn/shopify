import TableRows from '@/app/store/admin/components/TableRows';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import DeliveryStatus, { DeliveryStatuses } from '../components/DeliveryStatus';
import OrderStatusBadge, {
  OrderStatuses,
} from '../components/OrderStatusBadge';

const orders = [
  {
    orderId: 'GHIJKL',
    orderDate: 'April 10 2001',
    orderStatus: 'PROCCESING',
    paymentMethod: 'PayPal',
    deliveryStatus: 'DELIVERED',
    totalPrice: 150.75,
    customer: 'John Doe',
  },
  {
    orderId: 'MNOPQR',
    orderDate: 'May 15 2001',
    orderStatus: 'CANCELED',
    paymentMethod: 'Debit Card',
    deliveryStatus: 'DELIVERED',
    totalPrice: 0.0,
    customer: 'Jane Doe',
  },
  {
    orderId: 'STUVWX',
    orderDate: 'June 20 2001',
    orderStatus: 'REFUNDED',
    paymentMethod: 'Credit Card',
    deliveryStatus: 'ON_WAY',
    totalPrice: 450.0,
    customer: 'Mark Smith',
  },
  {
    orderId: 'YZABCD',
    orderDate: 'July 25 2001',
    orderStatus: 'COMPLETED',
    paymentMethod: 'Bank Transfer',
    deliveryStatus: 'PENDING',
    totalPrice: 325.99,
    customer: 'Alice Johnson',
  },
  {
    orderId: 'EFGHIJ',
    orderDate: 'August 30 2001',
    orderStatus: 'PROCCESING',
    paymentMethod: 'Credit Card',
    deliveryStatus: 'RETURNED',
    totalPrice: 275.5,
    customer: 'Bob Brown',
  },
];
const headers = [
  { code: 'order_id', label: 'Order ID' },
  { code: 'customer', label: 'Customer' },
  { code: 'order_date', label: 'Order Date' },
  { code: 'order_status', label: 'Order Status' },
  { code: 'payment_status', label: 'Payment Status' },
  { code: 'delivery_status', label: 'Delivery Status' },
  { code: 'total_price', label: 'Total Price' },
];
const OrderTable = () => {
  return (
    <Table className='border rounded-sm'>
      <TableHeader>
        <TableRows headers={headers} notSorted={['order_id']} />
      </TableHeader>
      <TableBody className='text-xs'>
        {orders.map((order) => (
          <TableRow
            className='h-12 hover:bg-card transition-colors'
            key={order.orderId}
          >
            <TableCell>{order.orderId}</TableCell>
            <TableCell>{order.customer}</TableCell>
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
export default OrderTable;
