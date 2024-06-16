import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  src: string;
  userName: string;
}

const CustomerAvatar = ({ src, userName }: Props) => {
  return (
    <div className='flex items-center gap-1'>
      <Avatar className='h-7 w-7 rounded-md'>
        <AvatarImage src={src} />
        <AvatarFallback className='rounded-md'>CN</AvatarFallback>
      </Avatar>
      <span>{userName}</span>
    </div>
  );
};
export default CustomerAvatar;
