'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminDashboardLinks, adminStoreLinks } from '../utils/sidebar-links';

const SideBar = () => {
  const currentPath = usePathname();
  return (
    <section className='shadow-md bg-white rounded-sm min-h-screen '>
      <p className='h-14  flex items-center justify-center font-black text-lg text-blue-400 '>
        ZebBusiness Admin
      </p>

      <div className='flex  min-h-[90vh] borders  justify-between flex-col  text-sm mx-5'>
        <ul>
          {adminDashboardLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={cn({
                  'flex items-center my-1 px-2 py-2 rounded-md hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer':
                    true,
                  'bg-black text-white': currentPath == link.path,
                })}
              >
                <span className='flex items-center gap-2'>
                  <link.icon strokeWidth={1.5} size={20} />
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className='border-t my-2'>
          <ul className='mt-3 flex flex-col'>
            {adminStoreLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className={cn({
                    'flex items-center my-1 px-2 py-2 rounded-md hover:text-white hover:bg-zinc-700 transition-colors cursor-pointer':
                      true,
                    'bg-black text-white': currentPath == link.path,
                  })}
                >
                  <span className='flex items-center gap-2'>
                    <link.icon strokeWidth={1.5} size={20} />
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <div className='flex items-center border px-2 py-1 gap-2 rounded-md shadow-sm cursor-pointer'>
              <Avatar className='w-6 h-6'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p className='flex flex-col text-xs'>
                <span className='font-semibold '>Mortensen Ulysse</span>
                <span className='text-[8px]'>developerstudio007@gmail.com</span>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SideBar;
