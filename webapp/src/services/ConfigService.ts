import getConfig from 'next/config';

export class ConfigService {
  public static get(key: string) {
    const { publicRuntimeConfig } = getConfig();

    return publicRuntimeConfig;
  }
}
