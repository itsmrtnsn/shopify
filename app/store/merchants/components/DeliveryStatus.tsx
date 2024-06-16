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
        'bg-teal-200 text-teal-800 hover:bg-teal-300 dark:bg-teal-300 dark:text-teal-800 dark:hover:bg-teal-400':
          status === 'DELIVERED',
        'bg-orange-200 text-orange-500 dark:bg-orange-300 dark:text-orange-700':
          status === 'ON_WAY',
        'bg-red-100 text-red-600 dark:bg-red-300 dark:text-red-600':
          status === 'RETURNED',
        'bg-sky-200 text-slate-600 dark:bg-sky-300 dark:text-sky-700':
          status === 'PENDING',
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
