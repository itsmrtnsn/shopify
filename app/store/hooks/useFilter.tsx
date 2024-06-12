'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useFilter = (key: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isFiltered = searchParams.get(key);

  const HandlerFilter = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (isFiltered) {
      params.delete(key);
      if (isFiltered !== value) {
        params.set(key, value);
      }
    } else {
      params.set(key, value);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return { isFiltered, HandlerFilter };
};
export default useFilter;
