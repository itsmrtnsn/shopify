import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface Props {
  quantityInstock: number;
  threshold: number;
}

const StockStatusBadge = ({ quantityInstock, threshold }: Props) => {
  const status =
    quantityInstock === 0
      ? 'Out of Stock'
      : quantityInstock < threshold
      ? 'Low'
      : 'In Stock';
  return (
    <Badge
      variant='outline'
      className={cn(
        {
          'text-green-600 bg-green-300 dark:text-green-800 dark:bg-green-500':
            status === 'In Stock',
          'text-yellow-600 bg-yellow-300 dark:text-yellow-800 dark:bg-yellow-500':
            status === 'Low',
          'text-red-600 bg-red-300 dark:text-red-900 dark:bg-red-400':
            status === 'Out of Stock',
        },
        'text-xs font-normal'
      )}
    >
      {status}
    </Badge>
  );
};
export default StockStatusBadge;
