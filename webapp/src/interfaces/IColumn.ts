import { CSSProperties } from 'react';
import { IOption, IMediaFile } from '@interfaces';

export type InputType = 'pictures' | 'select' | 'text' | 'number';

export interface IColumn<TData> {
  field: keyof TData;
  title: string;
  editMode?: boolean;
  row?: {
    style?: CSSProperties;
  };
  header?: {
    style?: CSSProperties;
  };
  type?: InputType;
  options?: IOption[];
  maxPictures?: number;
  renderValue?: (value: unknown) => string | number | string[] | IMediaFile[];
  validate?: (value: unknown) => string | undefined;
}
