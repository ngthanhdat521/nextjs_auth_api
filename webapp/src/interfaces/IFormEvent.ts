import { IMediaFile } from './IMediaFile';

export interface IFormEvent {
  currentTarget: {
    name: string;
    value?: string | number | IMediaFile[] | IMediaFile;
  };
}
