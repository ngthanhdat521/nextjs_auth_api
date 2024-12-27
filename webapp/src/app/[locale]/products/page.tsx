import { PaginatedResult, ProductItem } from '@common-types';
import { ProductList } from '@components/screens';
import { fetchService } from '@services';

export default async function Page({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const response = await fetchService.get<PaginatedResult<ProductItem>>(
    'products',
    {
      params: {
        page: searchParams?.page || 0,
        limit: searchParams?.limit || 12,
        keyword: searchParams?.keyword,
        category: searchParams?.category,
        sort: searchParams?.sort,
      },
    }
  );

  return <ProductList staticData={response.result} />;
}
