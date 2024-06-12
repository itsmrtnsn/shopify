'use client';

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const ResetQueryParams = () => {
  const { replace, refresh } = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleReset = () => {
    replace(pathname);
    refresh();
  };

  return (
    <>
      {searchParams.size > 0 && (
        <Button
          className='font-normal text-xs tracking-wide transition-all ease-in-out cursor-pointer'
          variant={searchParams.size ? 'destructive' : 'outline'}
          aria-disabled={!searchParams.size}
          onClick={handleReset}
          size='sm'
        >
          <span className='flex items-center gap-1'>
            Reset
            <X size={18} strokeWidth={1} />
          </span>
        </Button>
      )}
    </>
  );
};

export default ResetQueryParams;
