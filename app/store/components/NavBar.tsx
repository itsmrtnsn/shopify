import { cn } from '@/lib/utils';
import {
  MenuIcon,
  Search,
  Sheet,
  ShoppingBag,
  ShoppingBasket,
} from 'lucide-react';
import iconScheme from '../utils/IconScheme';
import OverlayMenu from './OverlayMenu';
import Link from 'next/link';
const NavBar = () => {
  return (
    <nav className='flex items-center justify-between px-3 border-b h-12'>
      <div className='flex items-center gap-3'>
        <OverlayMenu />
        <Link href='/store'>
          <h1 className='font-black text-lg text-primary'>Izi Achat</h1>
        </Link>
      </div>
      <div className='flex items-center gap-3'>
        <Link href='/store/search'>
          <Search
            size={iconScheme.iconSize}
            className={cn(iconScheme.iconColor)}
            strokeWidth={iconScheme.iconStrokeWidth}
          />
        </Link>
        <div className='relative'>
          <ShoppingBag
            size={iconScheme.iconSize}
            className={cn(iconScheme.iconColor)}
            strokeWidth={iconScheme.iconStrokeWidth}
          />
          <p className='w-4 h-4 rounded-full bg-primary absolute -top-1 -right-1 flex items-center justify-center text-center font-medium text-[10px] text-white'>
            4
          </p>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
