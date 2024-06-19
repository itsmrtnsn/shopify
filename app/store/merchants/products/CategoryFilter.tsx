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

const categories = [{ code: 'pets', label: 'Pets' }];

const CategoryFilter = () => {
  const [animationParent] = useAutoAnimate();
  const { isFiltered, HandlerFilter } = useFilter('category');

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
              {isFiltered ? 'Filtered by ' + isFiltered : 'Filter By Category'}
            </span>
          }
          ref={animationParent}
        />
      </SelectTrigger>
      <SelectContent>
        {categories.map((category) => (
          <SelectItem
            value={category.code}
            key={category.code}
            className='transition-all ease-in-out  text-sm tracking-wide'
          >
            {category.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default CategoryFilter;
