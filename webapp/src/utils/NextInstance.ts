'use client';
import axios, { AxiosError } from 'axios';
import { useDialogStore, useLoadingStore } from '@stores';
import { IResponseError } from '@interfaces/IResponseError';

const dialog = useDialogStore.getState();
const { openLoading, closeLoading } = useLoadingStore.getState();

const nextInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
});

// Add a request interceptor
nextInstance.interceptors.request.use(
  function (config) {
    openLoading();
    // Do something before request is sent
    return config;
  },
  function (error) {
    closeLoading();
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
nextInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    closeLoading();
    return response;
  },
  function (error: AxiosError<IResponseError>) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const data = error.response?.data;

    if (data) {
      setTimeout(() => {
        closeLoading();
        dialog.openNotificationDialog({
          content: 'messages.serverOccursError',
          params: {
            message: data.error,
            statusCode: error.response?.status || 0,
          },
        });
      }, 1000);
    }

    return Promise.reject(error);
  }
);

export { nextInstance };
