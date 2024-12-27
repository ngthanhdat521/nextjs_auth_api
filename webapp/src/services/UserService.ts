'use client';
import { httpService } from '@services';
import { nextInstance } from '@utils';
import { IUser, ISession } from '@interfaces/User';

export class UserService {
  /**
   * Get list of product
   * @param page
   * @param limit
   * @param keyword
   * @returns
   */
  public async getUserInfo(): Promise<IUser> {
    const { data } = await httpService.get<IUser>(
      'users/detail',
    );

    return data.result;
  }

  /**
   * Get list of product
   * @param page
   * @param limit
   * @param keyword
   * @returns
   */
  public async getSession(): Promise<IUser> {
    const response = await nextInstance.get<ISession>(
      'auth/token',
    );

    localStorage.setItem(
      'id_token',
      response.data.idToken
    );
    localStorage.setItem(
      'access_token',
      response.data.accessToken
    );

    return this.getUserInfo();
  }
}

export const userService = new UserService();
