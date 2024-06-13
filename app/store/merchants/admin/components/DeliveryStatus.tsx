import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type DeliveryStatuses = 'DELIVERED' | 'PENDING' | 'RETURNED' | 'ON_WAY';

interface Props {
  status: DeliveryStatuses;
}

const DeliveryStatus = ({ status }: Props) => {
  return (
    <Badge
      className={cn('cursor-pointer rounded-sm text-xs font-normal', {
        'bg-teal-200 text-teal-800 rounded-sm hover:bg-teal-300':
          status === 'DELIVERED',
        'bg-orange-200 text-orange-500': status === 'ON_WAY',
        'bg-red-100 text-red-600': status === 'RETURNED',
        'bg-sky-200 text-slate-600': status === 'PENDING',
      })}
      variant='outline'
    >
      {status === 'ON_WAY'
        ? 'On way'
        : status.charAt(0).toLocaleUpperCase() +
          status.slice(1).toLocaleLowerCase()}
    </Badge>
  );
};
export default DeliveryStatus;
