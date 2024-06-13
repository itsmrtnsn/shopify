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
        'bg-teal-200 text-teal-800 rounded-sm hover:bg-teal-300':
          status === 'COMPLETED',
        'bg-orange-200 text-orange-500': status === 'PROCCESING',
        'bg-red-100 text-red-600': status === 'CANCELED',
        'bg-sky-200 text-slate-600': status === 'REFUNDED',
      })}
    >
      {status.charAt(0).toUpperCase() + status.slice(1).toLocaleLowerCase()}
    </Badge>
  );
};
export default OrderStatusBadge;
