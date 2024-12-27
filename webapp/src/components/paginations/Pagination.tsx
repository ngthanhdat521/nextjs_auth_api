import { ChangeEvent, FC, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { OutlinedButton } from '@components/buttons';
import { useTranslations } from 'next-intl';
import { Select } from '@components/inputs';

interface IProps {
  page: number;
  limit: number;
  total: number;
  onPageChange?: (page: number) => void;
  onLimitChange?: (limit: number) => void;
}

export const Pagination: FC<IProps> = (props) => {
  const { page, limit, total, onPageChange, onLimitChange } = props;
  const t = useTranslations('common');

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handlePageChange = ({ selected }: { selected: number }) =>
    mounted && onPageChange && onPageChange(selected);

  const handleLimitChange = (event: ChangeEvent<HTMLSelectElement>) =>
    onLimitChange && onLimitChange(parseInt(event.currentTarget.value));

  const from = page * limit + 1;
  const to = from + limit;
  
  return (
    <div
      className='flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4'
      aria-label='Table navigation'
    >
      <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
        {t('showing')}
        <span className='font-semibold text-gray-900 dark:text-white mx-1'>
          {`${from}-${to > total ? total : to}`}
        </span>
        {t('of')}
        <span className='ml-1 font-semibold text-gray-900 dark:text-white'>
          {total}
        </span>
      </span>
      <ul className='flex gap-5'>
        <Select
          className=''
          value={limit}
          options={[
            {
              value: 12,
              display: '12',
            },
            {
              value: 24,
              display: '24',
            },
            {
              value: 36,
              display: '36',
            },
            {
              value: 48,
              display: '48',
            },
          ]}
          onChange={handleLimitChange}
        />
        <ReactPaginate
          className='flex'
          breakLabel='...'
          previousLabel={
            <OutlinedButton className='h-full py-1.5 px-3 rounded-l-lg !rounded-r-none border-gray-300'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </OutlinedButton>
          }
          nextLabel={
            <OutlinedButton className='h-full py-1.5 px-3 !rounded-l-none rounded-r-lg border-gray-300 !border-l-0'>
              <svg
                className='w-5 h-5'
                aria-hidden='true'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </OutlinedButton>
          }
          pageClassName='text-sm leading-tight text-gray-500 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          pageLinkClassName='flex justify-center items-center w-[35px] h-full'
          breakClassName='flex items-center justify-center text-sm py-2 px-3 leading-tight text-gray-500 bg-white border-t border-b border-r border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          activeClassName='!bg-indigo-500 text-white dark:text-white'
          onPageChange={handlePageChange}
          pageRangeDisplayed={3}
          pageCount={Math.ceil(total / limit)}
          marginPagesDisplayed={1}
          initialPage={page}
        />
      </ul>
    </div>
  );
};
