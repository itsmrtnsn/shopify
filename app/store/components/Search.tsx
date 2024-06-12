'use client';

import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import useSearch from '../hooks/useSearch';

interface Search {
  className?: string;
  placeolder?: string;
}

const Search = ({ className, placeolder }: Search) => {
  const { isSearched, handleSearch } = useSearch('search');
  return (
    <Input
      className={cn('shadow-none w-[20rem] text-xs transition-all', className)}
      placeholder={
        isSearched ? isSearched : placeolder ? placeolder : 'Search...'
      }
      onChange={(event) => {
        handleSearch(event.target.value);
      }}
    />
  );
};
export default Search;
