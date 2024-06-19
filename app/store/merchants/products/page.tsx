import { Button } from '@/components/ui/button';
import Pagination from '../../components/Pagination';
import ResetQueryParams from '../../components/ResetQueryParams';
import Search from '../../components/Search';
import CategoryFilter from './CategoryFilter';
import ProductTable from './ProductTable';
import StockFilter from './StockFilter';
import { Plus } from 'lucide-react';

const ProductPage = () => {
  return (
    <div className='border rounded-md p-2'>
      <div className='h-[4rem] flex items-center justify-between'>
        <div className='flex items-center gap-3 '>
          <Search placeolder='Search Products...' />
          <ResetQueryParams />
        </div>
        <div className='flex items-center gap-3'>
          <StockFilter />
          <CategoryFilter />
          <Button variant='secondary'>
            <span className='mr-1'>
              <Plus size={16} />
            </span>
            Add Product
          </Button>
        </div>
      </div>
      <ProductTable />
      <Pagination
        totalItems={0}
        pageSize={0}
        currentPage={0}
        paginationFor='Products'
      />
    </div>
  );
};
export default ProductPage;
