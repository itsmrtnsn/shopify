import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export type OrderStatuses =
  | 'COMPLETED'
  | 'PROCCESING'
  | 'CANCELED'
  | 'REFUNDED';

interface Props {
  status: OrderStatuses;
}

const OrderStatusBadge = ({ status }: Props) => {
  return (
    <Badge
      variant='outline'
      className={cn('cursor-pointer rounded-sm text-xs font-normal', {
        'bg-teal-200 text-teal-800 hover:bg-teal-300 dark:bg-teal-300':
          status === 'COMPLETED',
        'bg-orange-200 text-orange-500 dark:bg-orange-300 dark:text-orange-700':
          status === 'PROCCESING',
        'bg-red-100 text-red-600 dark:bg-red-300': status === 'CANCELED',
        'bg-sky-200 text-slate-600 dark:bg-sky-300 dark:text-sky-700':
          status === 'REFUNDED',
      })}
    >
      {status.charAt(0).toUpperCase() + status.slice(1).toLocaleLowerCase()}
    </Badge>
  );
};
export default OrderStatusBadge;
