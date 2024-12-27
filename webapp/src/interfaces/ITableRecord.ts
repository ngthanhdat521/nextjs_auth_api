import { IMediaFile } from './IMediaFile';

export interface ITableRecord
  extends Record<string, number | string | string[] | IMediaFile[]> {
  id: string;
  createdOn: string;
  updatedOn: string;
}
