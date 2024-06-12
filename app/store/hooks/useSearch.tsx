'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const useSearch = (key: string) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const isSearched = searchParams.get(key);

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (isSearched) {
      params.delete(key);
      if (isSearched !== value) {
        params.set(key, value);
      }
    } else {
      params.set(key, value);
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return { isSearched, handleSearch };
};

export default useSearch;
