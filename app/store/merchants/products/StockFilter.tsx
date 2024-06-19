'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { useAutoAnimate } from '@formkit/auto-animate/react';

import { SlidersHorizontal } from 'lucide-react';
import useFilter from '../../hooks/useFilter';

const statuses = [
  { code: 'ok', label: 'Ok' },
  { code: 'low', label: 'Low' },
  { code: 'out', label: 'Out of Stock' },
];

const StockFilter = () => {
  const [animationParent] = useAutoAnimate();
  const { isFiltered, HandlerFilter } = useFilter('stock');

  return (
    <Select onValueChange={(value) => HandlerFilter(value)}>
      <SelectTrigger
        className={cn(
          'w-fit py-[0.43rem] text-xs tracking-wide h-fit transition-all ease-in-out ',
          {
            'bg-primary text-white py-[0.50rem]': isFiltered,
          }
        )}
      >
        <SelectValue
          placeholder={
            <span className='flex items-center gap-2 text-xs'>
              <SlidersHorizontal strokeWidth={0.75} size={15} />
              {isFiltered
                ? 'Filtered by ' + isFiltered
                : 'Filter By Stock Status'}
            </span>
          }
          ref={animationParent}
        />
      </SelectTrigger>
      <SelectContent>
        {statuses.map((status) => (
          <SelectItem
            value={status.code}
            key={status.code}
            className='transition-all ease-in-out  text-sm tracking-wide'
          >
            {status.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default StockFilter;
