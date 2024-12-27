import { backendInstance } from '@utils';
import { useDialogStore, useLoadingStore } from '@stores';
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpResponse } from '@common-types';
import { InsertResult, UpdateResult, DeleteResult } from '@common-types';

const dialog = useDialogStore.getState();
const { closeLoading } = useLoadingStore.getState();

export class HttpService {
  public get<T>(url: string, options?: AxiosRequestConfig) {
    return backendInstance.get<HttpResponse<T>>(url, {
      ...options,
      headers: { Authorization: `Bearer ${localStorage.getItem('id_token')}` },
    });
  }

  public async post<TBody, TResponse>(
    url: string,
    body: TBody,
    options?: AxiosRequestConfig
  ) {
    try {
      const data = await backendInstance.post<TBody, AxiosResponse<HttpResponse<InsertResult<TResponse>>>>(url, body, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${localStorage.getItem('id_token')}`,
        },
      });
      dialog.openNotificationDialog({
        content: 'messages.postSuccessfully',
      });
      return data;
    } catch (error: AxiosError | unknown) {
      closeLoading();

      dialog.openNotificationDialog({
        content: 'messages.requestError',
        params: {
          message:
            error instanceof AxiosError ? error.message : 'Undefined Error',
        },
      });

      throw error;
    }
  }

  public async delete<TBody>(
    url: string,
    body: TBody,
    options?: AxiosRequestConfig
  ) {
    try {
      const data = await backendInstance.delete<TBody, DeleteResult>(url, {
        ...options,
        data: body,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${localStorage.getItem('id_token')}`,
        },
      });

      dialog.openNotificationDialog({
        content: 'messages.postSuccessfully',
      });

      return data;
    } catch (error) {
      closeLoading();

      dialog.openNotificationDialog({
        content: 'messages.requestError',
        params: {
          message:
            error instanceof AxiosError ? error.message : 'Undefined Error',
        },
      });

      throw error;
    }
  }

  public async put<TBody, TResponse>(
    url: string,
    body: TBody,
    options?: AxiosRequestConfig
  ) {
    try {
      const response = await backendInstance.put<TBody, AxiosResponse<HttpResponse<UpdateResult<TResponse>>>>(url, body, {
        ...options,
        headers: {
          ...options?.headers,
          Authorization: `Bearer ${localStorage.getItem('id_token')}`,
        },
      });

      dialog.openNotificationDialog({
        content: 'messages.postSuccessfully',
      });

      return response;
    } catch (error) {
      closeLoading();

      dialog.openNotificationDialog({
        content: 'messages.requestError',
        params: {
          message:
            error instanceof AxiosError ? error.message : 'Undefined Error',
        },
      });

      throw error;
    }
  }
}

export const httpService = new HttpService();
