import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CustomerAvatar = () => {
  return (
    <div className='flex items-center justify-between'>
      <div>
        <p className='text-zinc-500 text-sm font-semibold'>Name</p>
        <p className='text-xs font-medium'>Mortensen Ulysse</p>
      </div>
      <Avatar className='h-7 w-7'>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};
export default CustomerAvatar;
