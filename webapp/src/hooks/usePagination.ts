'use client'
import { useState } from 'react';

export function usePagination<TFilters>(initialTotal: number = 0) {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, onTotalChange] = useState(initialTotal);
  const [keyword, setKeyword] = useState<string>('');
  const [sort, setSort] = useState<number>(0);
  const [filters, setFilters] = useState<TFilters | undefined>(undefined);

  const onPageChange = (nextPage: number) => {
    setPage(nextPage);
  };

  const onLimitChange = (nextPageSize: number) => {
    setLimit(nextPageSize);
  };

  const onSearch = (tableKeyword: string) => {
    setKeyword(tableKeyword);
  };

  const onSort = (order: number) => {
    setSort(order);
  };

  const onFilters = (newFilters: TFilters) => {
    setFilters(newFilters);
  };

  return {
    keyword,
    total,
    limit,
    page,
    sort,
    filters,
    onFilters,
    onTotalChange,
    onPageChange,
    onLimitChange,
    onSearch,
    onSort
  };
}
