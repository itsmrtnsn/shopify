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
import useFilter from '../../../hooks/useFilter';

const genders = [
  { code: 'male', label: 'Male' },
  { code: 'female', label: 'Female' },
  { code: 'other', label: 'Other' },
];

const GenderFilter = () => {
  const [animationParent] = useAutoAnimate();
  const { isFiltered, HandlerFilter } = useFilter('gender');

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
            isFiltered ? 'Filtered by ' + isFiltered : 'Gender Filter'
          }
          ref={animationParent}
        />
      </SelectTrigger>
      <SelectContent>
        {genders.map((gender) => (
          <SelectItem
            value={gender.code}
            key={gender.code}
            className='transition-all ease-in-out  text-sm tracking-wide'
          >
            {gender.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default GenderFilter;
