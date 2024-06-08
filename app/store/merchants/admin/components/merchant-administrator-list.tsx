import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const MerchantAdministratorList = () => {
  return (
    <Select>
      <SelectTrigger className='w-auto'>
        <SelectValue
          placeholder={
            <p className='flex items-center'>
              <Avatar className='w-5 h-5'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className='ml-1 text-xs'>Mortensen Ulysse</span>
            </p>
          }
        />
      </SelectTrigger>
      <SelectContent className='font-light'>
        <SelectItem value='light'>Light</SelectItem>
        <SelectItem value='dark'>Dark</SelectItem>
        <SelectItem value='system'>System</SelectItem>
      </SelectContent>
    </Select>
  );
};
export default MerchantAdministratorList;
