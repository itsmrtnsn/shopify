import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import TableRows from '../../admin/components/TableRows';
import StockStatusBadge from './StockStatusBadge';

const productsList = [
  {
    id: 1,
    name: 'Red Jeans for men in Six sizes',
    thumbnail: '',
    price: 3.99,
    quantityInStock: 0,
    threshold: 10,
    category: 'Vegetables',
  },
  {
    id: 2,
    name: 'Carrot',
    thumbnail: '',
    price: 2.99,
    quantityInStock: 20,
    category: 'Vegetables',
  },
  {
    id: 3,
    name: 'Apple',
    thumbnail: '',
    price: 1.99,
    quantityInStock: 5,
    category: 'Fruits',
  },
];
const productTableHeaders = [
  { code: 'id', label: 'Product ID' },
  { code: 'thumbnail', label: 'Thumbnail' },
  { code: 'name', label: 'Name' },
  { code: 'price', label: 'Price' },
  { code: 'stock_status', label: 'StockStatus' },
  { code: 'category', label: 'Category' },
];

const ProductTable = () => {
  return (
    <Table className='border text-xs'>
      <TableHeader>
        <TableRows headers={productTableHeaders} notSorted={['id']} />
      </TableHeader>
      <TableBody>
        {productsList.map(
          ({
            id,
            thumbnail,
            name,
            price,
            quantityInStock,
            threshold,
            category,
          }) => (
            <TableRow className='h-12 hover:bg-card transition-colors' key={id}>
              <TableCell>{id}</TableCell>
              <TableCell>{thumbnail}</TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>
                <StockStatusBadge
                  quantityInstock={quantityInStock}
                  threshold={10}
                />
              </TableCell>
              <TableCell>{category}</TableCell>
            </TableRow>
          )
        )}
      </TableBody>
    </Table>
  );
};
export default ProductTable;
