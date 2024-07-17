'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex size-10 items-center justify-center rounded-full opacity-80 outline-none transition-opacity hover:opacity-100"
    >
      {theme === 'light' ? (
        <SunIcon className="size-5" />
      ) : (
        <MoonIcon className="size-5" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}

export default ThemeSwitcher;
