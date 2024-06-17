import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '../../components/Icon';

interface Props {
  title: string;
  description: string;
  stats: number;
  iconColor: string;
  icon: any;
}

const StatsCard = ({ title, description, stats, icon, iconColor }: Props) => {
  return (
    <Card className='shadow-none'>
      <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
        <CardTitle className='text-sm font-medium'>{title}</CardTitle>
        <Icon name={icon} size={30} strokeWidth={1} className={iconColor} />
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold flex items-center'>{stats}</div>
        <p className='text-xs text-muted-foreground'>{description}</p>
      </CardContent>
    </Card>
  );
};
export default StatsCard;
