import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  EnvelopeClosedIcon,
  ExitIcon,
  GearIcon,
  QuestionMarkCircledIcon,
} from '@radix-ui/react-icons';
import Link from 'next/link';
import sidebarLinks from '../utils/sidebar-links';

const SideBar = () => {
  return (
    <section className='shadow-md'>
      <div className='flex h-full justify-between flex-col min-h-[92vh] font-light text-sm mx-5'>
        <div>
          {sidebarLinks.map((link) => (
            <div
              key={link.id}
              className='flex items-center my-3 px-2 py-2 rounded-md hover:bg-sky-100 hover:text-blue-600 transition-colors text-zinc-700'
            >
              <link.icon className='w-4 h-4 mr-2 ' />
              <Link href={link.path}>{link.label}</Link>
            </div>
          ))}
        </div>

        <div className='flex flex-col justify-between h-[15rem] border-t my-3'>
          <ul className='mt-3 flex flex-col'>
            <Link
              href='/'
              className='mt-3 flex flex-col px-2 py-1 rounded-md hover:bg-sky-100 hover:text-blue-600 transition-colors text-zinc-700'
            >
              <span className='flex items-center gap-2'>
                <GearIcon />
                Settings
              </span>
            </Link>
            <Link
              href='/'
              className='mt-3 flex flex-col px-2 py-1 rounded-md hover:bg-sky-100 hover:text-blue-600 transition-colors text-zinc-700'
            >
              <span className='flex items-center gap-2'>
                <EnvelopeClosedIcon />
                Message
              </span>
            </Link>
            <Link
              href='/'
              className='mt-3 flex flex-col px-2 py-1 rounded-md hover:bg-sky-100 hover:text-blue-600 transition-colors text-zinc-700'
            >
              <span className='flex items-center gap-2'>
                <QuestionMarkCircledIcon />
                Help Center
              </span>
            </Link>
          </ul>
          <Button className='w-full' variant='outline'>
            <p className='flex items-center'>
              <Avatar className='w-5 h-5'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className='ml-1.5 text-xs'>Sign out</span>
            </p>
            <ExitIcon className='w-4 h-4 ml-4' />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default SideBar;
