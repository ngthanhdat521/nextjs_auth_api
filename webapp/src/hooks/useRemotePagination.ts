'use client'
import { useState } from 'react';
import { useNavigate } from '@hooks/useNavigate';
import { useSearchParams } from 'next/navigation';

export function useRemotePagination<TFilters>() {
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState<TFilters | undefined>(undefined);
  const { navigate } = useNavigate();

  const onPageChange = (page: number) => {
    console.log('12313')
    navigate('products', {
      params: {
        page: page,
        limit: searchParams.get('limit') || 12,
        keyword: searchParams.get('keyword'),
        sort: searchParams.get('sort'),
        ...filters
      },
    });
  };

  const onLimitChange = (limit: number) => {
    console.log('1231344')
    navigate('products', {
      params: {
        page: searchParams.get('page') || 0,
        limit,
        keyword: searchParams.get('keyword'),
        sort: searchParams.get('sort'),
        ...filters
      },
    });
  };

  const onFilters = () => {
    let sortOrder: number | string = parseInt(searchParams.get('sort') || "0");
    
    if (sortOrder === 1 || sortOrder === -1) {
      sortOrder = sortOrder === 1 ? "price:asc" : "price:desc"
    }


    navigate('products', {
      params: {
        page: searchParams.get('page'),
        limit: searchParams.get('limit'),
        keyword: searchParams.get('keyword'),
        ...filters,
        sort: sortOrder,
      },
    });
  };

  return {
    page: parseInt(searchParams.get('page') || '0'),
    limit: parseInt(searchParams.get('limit') || '10'),
    sort: searchParams.get('sort'),
    keyword: searchParams.get('keyword'),
    filters,
    setFilters: (newFilters: TFilters) => setFilters({
      ...filters,
      ...newFilters,
    }),
    onFilters,
    onPageChange,
    onLimitChange,
  };
}
