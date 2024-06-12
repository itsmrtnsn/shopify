import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import CustomerBadge, { BadgeType } from './CustomerBadge';
import CustomerTableHead from './CustomerTableHead';
import CustomerAvatar from './CustomerAvatar';
import TableAction from './TableAction';

const customers = [
  {
    customerId: 'C001',
    firstName: 'John',
    lastName: 'Doe',
    gender: 'Male',
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    membership: 'Gold',
    birthDate: '1985-02-15',
    totalOrders: 25,
  },
  {
    customerId: 'C002',
    firstName: 'Jane',
    lastName: 'Doe',
    gender: 'Female',
    email: 'jane.doe@example.com',
    phoneNumber: '098-765-4321',
    membership: 'Platinum',
    birthDate: '1990-06-24',
    totalOrders: 40,
  },
  {
    customerId: 'C003',
    firstName: 'Alice',
    lastName: 'Johnson',
    gender: 'Female',
    email: 'alice.johnson@example.com',
    phoneNumber: '555-666-7777',
    membership: 'Silver',
    birthDate: '1978-09-05',
    totalOrders: 15,
  },
  {
    customerId: 'C004',
    firstName: 'Bob',
    lastName: 'Smith',
    gender: 'Male',
    email: 'bob.smith@example.com',
    phoneNumber: '222-333-4444',
    membership: 'Bronze',
    birthDate: '1982-12-14',
    totalOrders: 10,
  },
  {
    customerId: 'C005',
    firstName: 'Carol',
    lastName: 'Taylor',
    gender: 'Female',
    email: 'carol.taylor@example.com',
    phoneNumber: '777-888-9999',
    membership: 'Gold',
    birthDate: '1975-07-08',
    totalOrders: 30,
  },
];

const CustomerTable = () => {
  return (
    <Table className='text-xs text-zinc-500'>
      <TableHeader className='border-t'>
        <CustomerTableHead />
      </TableHeader>
      <TableBody>
        {customers.map((customer) => (
          <TableRow key={customer.customerId} className='h-12'>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <CustomerAvatar
                userName='JohnDoe'
                src='https://github.com/shadcn.pn'
              />
            </TableCell>
            <TableCell>{customer.firstName}</TableCell>
            <TableCell>{customer.lastName}</TableCell>
            <TableCell>{customer.gender}</TableCell>
            <TableCell>{customer.phoneNumber}</TableCell>
            <TableCell>
              <CustomerBadge
                membership={customer.membership.toUpperCase() as BadgeType}
              />
            </TableCell>
            <TableCell>{customer.totalOrders}</TableCell>
            <TableCell>
              <TableAction />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default CustomerTable;
