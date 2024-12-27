'use client';
import { Product } from '@common-types';
import { httpService } from '@services';
import { IMediaFile } from '@interfaces/IMediaFile';

export class ProductService {
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
}

export const productService = new ProductService();
