'use client';
import React, { FC } from 'react';
import { Notifications } from '@components/lists';
import { useUserStore } from '@stores';
import {
  LogoutIcon,
  ShoppingBagIcon,
  UserSettingIcon,
  WarehouseIcon,
} from '@components/icons';
import { useTranslations } from 'next-intl';
import { SystemRoles } from '@constants/common';
import { Link } from '@components/links';

export const ProfileList: FC = () => {
  const { user } = useUserStore();
  const t = useTranslations();

  return (
    <Notifications className='w-[250px]' title={t('common.profile')}>
      <div className='text-base list-none bg-white divide-y divide-gray-100 rounded dark:bg-gray-700 dark:divide-gray-600'>
        <div className='px-4 py-3' role='none'>
          <p className='text-sm text-gray-900 dark:text-white' role='none'>
            {user?.firstname} {user?.lastname}
          </p>
          <p
            className='text-sm font-medium text-gray-900 truncate dark:text-gray-300'
            role='none'
          >
            {user?.email}
          </p>
        </div>
        {user?.roles.includes(SystemRoles.CUSTOMER) && (
          <ul className='py-1' role='none'>
            <li>
              <Link
                href='/api/auth/logout'
                className='w-full flex items-center px-4 py-2 gap-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <UserSettingIcon className='dark:text-white text-gray-500' />
                {t('common.settings')}
              </Link>
            </li>
            <li>
              <Link
                href='/api/auth/logout'
                className='w-full flex items-center px-4 py-2 gap-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <ShoppingBagIcon className='dark:text-white text-gray-500' />
                {t('common.myOrders')}
              </Link>
            </li>
            <li>
              <Link
                href='/api/auth/logout'
                className='w-full flex items-center px-4 py-2 gap-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <LogoutIcon className='dark:text-white text-gray-500' />
                {t('common.logout')}
              </Link>
            </li>
          </ul>
        )}
        {user?.roles.includes(SystemRoles.SYSTEM_ADMIN) && (
          <ul className='py-1' role='none'>
            <li>
              <Link
                href='product-management'
                className='w-full flex items-center px-4 py-2 gap-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <WarehouseIcon className='dark:text-white text-gray-500' />
                {t('pages.productManagement.name')}
              </Link>
            </li>
            <li>
              <Link
                href='/api/auth/logout'
                className='w-full flex items-center px-4 py-2 gap-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <LogoutIcon className='dark:text-white text-gray-500' />
                {t('common.logout')}
              </Link>
            </li>
          </ul>
        )}
      </div>
    </Notifications>
  );
};
