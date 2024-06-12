import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';

const genders = [
  { code: 'male', label: 'Male' },
  { code: 'female', label: 'Female' },
  { code: 'other', label: 'Other' },
];

const GenderFilter = () => {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue
          placeholder={
            <span className='flex items-center gap-3 text-xs'>
              <SlidersHorizontal strokeWidth={0.75} size={15} />
              Gender Filter
            </span>
          }
        />
      </SelectTrigger>
      <SelectContent>
        {genders.map((gender) => (
          <SelectItem value={gender.code} key={gender.code}>
            {gender.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default GenderFilter;
