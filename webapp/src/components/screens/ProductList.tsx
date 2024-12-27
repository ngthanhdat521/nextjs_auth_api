'use client';
import { PaginatedResult } from '@common-types/PaginatedResult';
import { ProductItem } from '@common-types/Product';
import { Button } from '@components/buttons';
import { ProductCard } from '@components/cards';
import { Select } from '@components/inputs';
import { Pagination } from '@components/paginations';
import { PageLayout } from '@components/templates';
import { Searchbox } from '@components/textboxes';
import { useRemotePagination } from '@hooks';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

interface IProps {
  staticData: PaginatedResult<ProductItem>;
}

type Filters = {
  keyword?: string;
  sort?: string;
  category?: string;
};

export const ProductList: FC<IProps> = (props) => {
  const { staticData } = props;

  const t = useTranslations();

  const { filters, onFilters, onPageChange, onLimitChange, setFilters } =
    useRemotePagination<Filters>();

  const handleFilter = () => {
    onFilters();
  };

  return (
    <PageLayout
      title={t('common.listOfProducts')}
      toolbar={
        <div className='flex gap-5'>
          <Searchbox
            onChange={(e) => setFilters({ keyword: e.currentTarget.value })}
            value={filters?.keyword}
            className='w-[300px] p-2'
          />
          <Select
            className='px-4 py-1'
            options={[
              {
                display: t('common.sortBy'),
                value: 0,
              },
              {
                display: t('common.ascending'),
                value: 1,
              },
              {
                display: t('common.descending'),
                value: -1,
              },
            ]}
            value={filters?.sort}
            onChange={(e) =>
              setFilters({ sort: e.currentTarget.value })
            }
          />
          <Button onClick={handleFilter}>{t('common.filter')}</Button>
        </div>
      }
    >
      <section className='bg-gray-50 antialiased dark:bg-gray-900'>
        {staticData.items.length ? (
          <div className='mb-4 grid gap-4 2xl:!grid-cols-4 sm:grid-cols-2 lg:grid-cols-3'>
            {staticData.items.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        ) : (
          <h5 className='w-full text-lg text-center'>
            {t('messages.productsIsEmpty')}
          </h5>
        )}
      </section>
      {!!staticData.items.length && (
        <Pagination
          page={staticData.page}
          limit={staticData.limit}
          total={staticData.total}
          onPageChange={onPageChange}
          onLimitChange={onLimitChange}
        />
      )}
    </PageLayout>
  );
};
