'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { adminDashboardLinks, adminStoreLinks } from '../utils/sidebar-links';

const SideBar = () => {
  const currentPath = usePathname();
  return (
    <section className='shadow-md rounded-sm min-h-screen border-r'>
      <p className='h-14 flex items-center justify-center font-black text-lg text-[dodgerblue] '>
        ZebBusiness Admin
      </p>

      <div className='flex min-h-[90vh] borders justify-between flex-col text-sm font-medium mx-5 tracking-wide'>
        <ul>
          {adminDashboardLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.path}
                className={cn({
                  'flex items-center my-1 px-2 py-2 rounded-md  hover:bg-indigo-500 cursor-pointer transition-all':
                    true,
                  'bg-primary text-white border-l-4 border-l-[dodgerblue]':
                    currentPath == link.path,
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
                    'flex items-center my-1 px-2 py-2 rounded-md hover:text-white hover:bg-indigo-500 transition-colors cursor-pointer':
                      true,
                    'bg-primary': currentPath == link.path,
                  })}
                >
                  <span className='flex items-center gap-2'>
                    <link.icon strokeWidth={1.5} size={20} />
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <div className='flex items-center border px-1 mt-5 py-0.5 gap-1 rounded-md shadow-sm cursor-pointer'>
              <Avatar className='w-8 h-8'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              <p className='flex flex-col text-xs'>
                <span className='font-semibold '>Mortensen Ulysse</span>
                <span className='text-[10px]'>mrtnsnIsCold</span>
              </p>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default SideBar;
