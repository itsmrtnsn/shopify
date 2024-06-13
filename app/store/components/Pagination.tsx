'use client';
import { Button } from '@/components/ui/button';
import {
  ArrowBigLeftDash,
  ArrowBigRightDash,
  CircleChevronLeft,
  CircleChevronRight,
} from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface Props {
  totalItems: number;
  pageSize: number;
  currentPage: number;
  paginationFor: string;
}

const Pagination = ({
  totalItems,
  pageSize,
  currentPage,
  paginationFor,
}: Props) => {
  const pageCount = Math.ceil(totalItems / pageSize);

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isPaginated = searchParams.get('page');
  const router = useRouter();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', page.toString());
    router.push('?' + params.toString());
  };

  return (
    <div className='border-t flex items-center justify-between h-[3.5rem] px-3'>
      <p className='flex items-center text-xs font-medium text-zinc-300'>
        Total {paginationFor}: {totalItems}
      </p>
      <div className='flex items-center gap-3'>
        <Button
          variant='outline'
          className='text-xs font-normal'
          disabled={currentPage <= 1}
          onClick={() => {
            handlePageChange(currentPage - 1);
          }}
        >
          <ArrowBigLeftDash strokeWidth={0.75} />
          Previous
        </Button>
        <Button variant='outline'>
          <CircleChevronLeft strokeWidth={0.75} />
        </Button>

        <Button variant='outline'>1</Button>
        <Button variant='outline'>2</Button>
        <Button variant='outline'>3</Button>
        <Button variant='outline'>
          <CircleChevronRight strokeWidth={0.75} />
        </Button>
        <Button
          variant='outline'
          className='text-xs font-normal'
          disabled={currentPage === pageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next <ArrowBigRightDash strokeWidth={0.75} />
        </Button>
      </div>
    </div>
  );
};
export default Pagination;
