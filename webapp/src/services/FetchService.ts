import { HttpResponse } from '@common-types';

export class FetchService {
  public async get<T>(
    url: string,
    options?: RequestInit & {
      params: Record<string, string | string[] | number | undefined | null>;
    }
  ) {
    const params: Record<string, string> = {};

    for (const key in options?.params) {
      if (
        options?.params?.[key] !== null &&
        options?.params?.[key] !== undefined &&
        options?.params?.[key] !== ''
      ) {
        const value = options?.params?.[key];
        params[key] = value.toString();
      }
    }

    const searchParams = new URLSearchParams(params).toString();

    const urlWithParams = searchParams ? `${url}?${searchParams}` : url;

    const response = await fetch(
      `${process.env.BACKEND_URL}/${urlWithParams}`,
      { cache: 'no-cache', ...options }
    );
    const data = (await response.json()) as HttpResponse<T>;
    return data;
  }
}

export const fetchService = new FetchService();
