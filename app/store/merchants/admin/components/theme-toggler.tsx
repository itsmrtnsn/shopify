'use client';

import { Button } from '@/components/ui/button';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const ThemeToggler = () => {
  const { setTheme } = useTheme();
  const [isLight, setLight] = useState('light');

  return (
    <div>
      {isLight && (
        <SunIcon
          className='w-5 h-5 cursor-pointer transition-all text-zinc-800 dark:text-white'
          onClick={() => {
            setTheme('dark');
            setLight('');
          }}
        />
      )}
      {!isLight && (
        <MoonIcon
          className='w-5 h-5 cursor-pointer transition-all text-zinc-800 dark:text-white '
          onClick={() => {
            setTheme('light');
            setLight('light');
          }}
        />
      )}
      <span className='sr-only'>toggle icon</span>
    </div>
  );
};
export default ThemeToggler;
