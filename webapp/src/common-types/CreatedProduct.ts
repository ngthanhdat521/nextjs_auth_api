import { IMediaFile } from '@interfaces/IMediaFile';

export type CreatedProduct = {
  id: string;
  code: string;
  title: string;
  description: string;
  pictures: IMediaFile[];
  price: number;
  category: string;
  createdOn: string;
}
