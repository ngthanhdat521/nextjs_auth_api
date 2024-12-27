'use client';
import { IconButton, ThemeButton } from '@components/buttons';
import { Dropdown } from '@components/dropdowns';
import { CartIcon, LanguageIcon, NotificationIcon } from '@components/icons';
import {
  ActionNotifications,
  LanguageNotifications,
  ProfileList,
} from '@components/lists';
import { MenuLink } from '@components/links';
import { Badge } from '@components/badges';
import { MenuAvatar } from '@components/avatars';
import { useTranslations } from 'next-intl';
import { useUser } from '@auth0/nextjs-auth0/client';

export const Header = () => {
  const t = useTranslations('common');
  const { user } = useUser();

  return (
    <nav className='fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='px-3 py-3 lg:px-5 lg:pl-3'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-start'>
            <button
              id='toggleSidebarMobile'
              aria-expanded='true'
              aria-controls='sidebar'
              className='p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                id='toggleSidebarMobileHamburger'
                className='w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                  clipRule='evenodd'
                />
              </svg>
              <svg
                id='toggleSidebarMobileClose'
                className='hidden w-6 h-6'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <a
              href='https://flowbite-admin-dashboard.vercel.app/'
              className='flex ml-2 md:mr-24'
            >
              <img
                src='https://flowbite-admin-dashboard.vercel.app/images/logo.svg'
                className='h-8 mr-3'
                alt='FlowBite Logo'
              />
              <span className='self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white'>
                Flowbite
              </span>
            </a>
            <div className='flex gap-1'>
              <MenuLink href='home'>{t('home')}</MenuLink>
              <MenuLink href='products'>{t('products')}</MenuLink>
              <MenuLink href='about'>{t('about')}</MenuLink>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <Dropdown
              popupProps={{
                className: 'top-10 right-0',
              }}
            >
              <Badge content={2}>
                <IconButton>
                  <NotificationIcon className='text-gray-500 dark:text-gray-400 w-6 h-6' />
                </IconButton>
              </Badge>
              <ActionNotifications />
            </Dropdown>
            <Badge content={2}>
              <IconButton>
                <CartIcon className='text-gray-500 dark:text-gray-400 w-6 h-6' />
              </IconButton>
            </Badge>
            <ThemeButton />
            <Dropdown
              popupProps={{
                className: 'top-10 right-0',
              }}
            >
              <IconButton>
                <LanguageIcon className='text-gray-500 dark:text-gray-400 w-6 h-6' />
              </IconButton>
              <LanguageNotifications />
            </Dropdown>
            <Dropdown
              popupProps={{
                className: 'top-10 right-0',
              }}
            >
              <IconButton>
                <MenuAvatar src={user?.picture || ''} />
              </IconButton>
              <ProfileList />
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
};
