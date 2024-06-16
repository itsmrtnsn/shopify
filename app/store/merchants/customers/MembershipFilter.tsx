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

const memberships = [
  { code: 'bronze', label: 'Bronze' },
  { code: 'silver', label: 'Silver' },
  { code: 'gold', label: 'Gold' },
  { code: 'platinum', label: 'Platinum' },
];

const MembershipFilter = () => {
  const [animationParent] = useAutoAnimate();

  const { isFiltered, HandlerFilter } = useFilter('membership');
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
              {isFiltered ? 'Filtered by ' + isFiltered : 'Membership Filter'}
            </span>
          }
          ref={animationParent}
        />
      </SelectTrigger>
      <SelectContent>
        {memberships.map((membership) => (
          <SelectItem
            value={membership.code}
            key={membership.code}
            className='transition-all ease-in-out  text-sm tracking-wide'
          >
            {membership.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default MembershipFilter;
