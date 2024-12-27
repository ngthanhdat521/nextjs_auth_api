'use client'
import { useRouter } from 'next/navigation';

export const useNavigate = () => {
  const router = useRouter();

  return {
    navigate: (url: string, options?: { params?: Record<string, string | number | null | undefined | string[]> }) => {
      const params: Record<string, string> = {};

      for (const key in options?.params) {
        const value = options?.params?.[key];
        if (value !== null && value !== undefined && value !== '') {
          params[key] = value.toString();
        }
      }

      const searchParams = new URLSearchParams(params).toString();

      router.push(searchParams ? `${url}?${searchParams}` : url)
    },
  };
};
