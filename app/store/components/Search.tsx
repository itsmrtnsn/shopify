import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface Search {
  className?: string;
  placeolder?: string;
}

const Search = ({ className, placeolder }: Search) => {
  return (
    <Input
      className={cn(
        'shadow-none text-xs max-w-[20rem] transition-all',
        className
      )}
      placeholder={placeolder ? placeolder : 'Search.....'}
    />
  );
};
export default Search;
