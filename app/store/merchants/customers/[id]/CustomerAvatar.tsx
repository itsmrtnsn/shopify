import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const CustomerAvatar = () => {
  return (
    <div className='flex items-center gap-1.5'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className='mt-0.5'>
        <p className='text-sm font-medium'>Mortensen Ulysse</p>
        <p className='text-zinc-500 text-xs'>itsmrtnsniscold</p>
      </div>
    </div>
  );
};
export default CustomerAvatar;
