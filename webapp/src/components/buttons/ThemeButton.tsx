'use client';
import { FC, useState } from 'react';
import { DarkModeIcon, LightModeIcon } from '@components/icons';
import { IconButton } from '@components/buttons';

export const ThemeButton: FC = () => {
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleThemeMode = () => {
    const classList = document.body.classList;
    if (classList.contains('dark')) {
      classList.remove('dark'); // Nếu có, xóa lớp 'dark'
    } else {
      classList.add('dark'); // Nếu không, thêm lớp 'dark'
    }

    setIsLightMode(!isLightMode);
  };

  return (
    <IconButton onClick={toggleThemeMode}>
      {isLightMode ? (
        <LightModeIcon className='text-gray-500 dark:text-gray-400' />
      ) : (
        <DarkModeIcon className='text-gray-500 dark:text-gray-400' />
      )}
    </IconButton>
  );
};
