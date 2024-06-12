import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const users = [
  {
    id: 'INV001',
    firstName: 'Mortensen',
    lastName: 'Ulysse',
    email: 'mortensenulysse@gmail.com',
  },
  {
    id: 'INV001',
    firstName: 'Mortensen',
    lastName: 'Ulysse',
    email: 'mortensenulysse@gmail.com',
  },
  {
    id: 'INV001',
    firstName: 'Mortensen',
    lastName: 'Ulysse',
    email: 'mortensenulysse@gmail.com',
  },
];

const UserTable = () => {
  return (
    <Table className='text-xs'>
      <TableHeader>
        <TableRow className='h-12'>
          <TableHead>
            <Checkbox />
          </TableHead>
          <TableHead>User Id</TableHead>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.email} className='h-12'>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.firstName}</TableCell>
            <TableCell>{user.lastName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>...</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default UserTable;
