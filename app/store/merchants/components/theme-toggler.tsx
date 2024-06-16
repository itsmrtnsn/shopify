'use client';

import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useState } from 'react';

const ThemeToggler = () => {
  const { setTheme } = useTheme();
  const [isLight, setLight] = useState('light');

  return (
    <div>
      <Switch
        onCheckedChange={() => {
          setTheme(isLight ? 'dark' : 'light');
          setLight(isLight ? '' : 'light');
        }}
      />
      <span className='sr-only'>toggle icon</span>
    </div>
  );
};
export default ThemeToggler;
