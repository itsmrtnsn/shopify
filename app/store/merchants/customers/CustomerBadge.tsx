import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
export type BadgeType = 'SILVER' | 'GOLD' | 'PLATINUM' | 'BRONZE';
export interface CustomerBadge {
  membership: BadgeType;
}

const CustomerBadge = ({ membership }: CustomerBadge) => {
  return (
    <Badge
      className={cn('text-xs font-normal cursor-pointer rounded-sm', {
        'bg-amber-900 text-white hover:bg-amber-700 transition-colors':
          membership === 'BRONZE',
        'bg-slate-400 text-white hover:bg-slate-500 transition-colors':
          membership === 'SILVER',
        'bg-amber-600 text-white hover:bg-amber-700 transition-colors':
          membership === 'GOLD',
        'bg-emerald-400 text-white hover:bg-emerald-700 transition-colors':
          membership === 'PLATINUM',
      })}
    >
      {membership.charAt(0).toUpperCase() +
        membership.slice(1).toLocaleLowerCase()}
    </Badge>
  );
};
export default CustomerBadge;
