'use client';
import { PaginatedResult, Product } from '@common-types';
import { httpService, fetchService } from '@services';
import { IMediaFile } from '@interfaces/IMediaFile';

export class ProductService {
  /**
   * Get list of product
   * @param page
   * @param limit
   * @param keyword
   * @returns
   */
  public async getTableData(
    page: number,
    limit: number,
    keyword: string
  ): Promise<PaginatedResult<Product<IMediaFile>>> {
    const { data } = await httpService.get<PaginatedResult<Product<string>>>(
      'products/table',
      {
        params: {
          page,
          limit,
          keyword: keyword || undefined,
        },
      }
    );

    return {
      ...data.result,
      items: data.result.items.map((product) => ({
        ...product,
        pictures: product.pictures.map((url) => ({
          url: url || undefined,
        })),
      })),
    };
  }

  /**
   * Create a list of products
   * @param product
   * @returns
   */
  public async create(product: Product<IMediaFile>) {
    const { pictures, ...rest } = product;

    const form = new FormData();

    pictures.forEach((picture, index) => {
      if (picture.file) form.append(`picture${index}`, picture.file);
    });

    form.append('product', JSON.stringify(rest));

    const response = await httpService.post<FormData, Product<IMediaFile>>(
      '/products',
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.result;
  }

  /**
   * Update a list of products
   * @param product
   * @returns
   */
  public async update(product: Product<IMediaFile>) {
    const { pictures = [], ...rest } = product;

    const form = new FormData();
    const deleted: number[] = [];

    pictures.forEach((picture, index) => {
      if (picture.file) form.append(`picture${index}`, picture.file);
      if (!picture.file && picture.url === '') deleted.push(index);
    });

    form.append('product', JSON.stringify({ ...rest, deleted }));

    const response = await httpService.put<FormData, Product<IMediaFile>>(
      `/products/${product.id}`,
      form,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data.result;
  }

  /**
   * Rate a product
   * @param product
   * @returns
   */
  public async rate(id: string, score: number) {
    const response = await httpService.put<unknown, { favoriteScore: number }>(`/products/${id}/rate`, {
      score,
    });

    return response.data.result.items[0];
  }

  /**
   * Delete a list of products
   * @param deleted
   * @returns
   */
  public async delete(deleted: string[]) {
    return httpService.delete('/products', {
      ids: deleted,
    });
  }
}

export const productService = new ProductService();
