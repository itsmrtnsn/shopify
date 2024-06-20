import { cn } from '@/lib/utils';
import { MenuIcon, Search, ShoppingBasket } from 'lucide-react';

const NavBar = () => {
  const iconSize = 25;
  const iconColor = 'text-zinc-900';
  return (
    <nav className='flex items-center justify-between px-3 border-b h-12'>
      <div className='flex items-center gap-3'>
        <MenuIcon size={iconSize} className={cn(iconColor)} />
        <h1 className='font-black text-lg text-blue-400'>EasyBusiness</h1>
      </div>
      <div className='flex items-center gap-3'>
        <Search size={iconSize} className={cn(iconColor)} />
        <ShoppingBasket size={iconSize} className={cn(iconColor)} />
      </div>
    </nav>
  );
};
export default NavBar;
