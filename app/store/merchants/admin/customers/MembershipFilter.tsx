import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SlidersHorizontal } from 'lucide-react';

const memberships = [
  { code: 'bronze', label: 'Bronze' },
  { code: 'silver', label: 'Silver' },
  { code: 'gold', label: 'Gold' },
  { code: 'platinum', label: 'Platinum' },
];

const MembershipFilter = () => {
  return (
    <Select>
      <SelectTrigger className='w-[180px]'>
        <SelectValue
          placeholder={
            <span className='flex items-center gap-3 text-xs'>
              <SlidersHorizontal strokeWidth={0.75} size={15} />
              Membership Filter
            </span>
          }
        />
      </SelectTrigger>
      <SelectContent>
        {memberships.map((membership) => (
          <SelectItem value={membership.code} key={membership.code}>
            {membership.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
export default MembershipFilter;
