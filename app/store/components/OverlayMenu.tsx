import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { MenuIcon } from 'lucide-react';
import iconScheme from '../utils/IconScheme';
import { cn } from '@/lib/utils';
const OverlayMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon
          size={iconScheme.iconSize}
          className={cn(iconScheme.iconColor)}
          strokeWidth={iconScheme.iconStrokeWidth}
        />
      </SheetTrigger>
      <SheetContent side='left'>
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};
export default OverlayMenu;
