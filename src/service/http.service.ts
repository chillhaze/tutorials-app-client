import axios, { Axios } from 'axios';
import BASE_URL from '../common/base-url';
import INewTutorial from '../interfaces/newTutorial.interface';
// import { IFormValues } from '../interfaces/formValues.interface';

interface IConfig {
  url: string;
  id?: string;
  published?: boolean;
  data?: INewTutorial;
  // data?: INewTutorial | IFormValues;
}

class HttpService {
  baseUrl: string | undefined;
  apiVersion: string;
  fetchingService: Axios;

  constructor({
    baseUrl = BASE_URL,
    apiVersion = 'api',
    fetchingService = axios,
  } = {}) {
    this.baseUrl = baseUrl;
    this.apiVersion = apiVersion;
    this.fetchingService = fetchingService;
  }

  private getFullApiUrl(config: IConfig) {
    if (config.id) {
      return `${this.baseUrl}/${this.apiVersion}/${config.url}/${config.id}`;
    } else {
      return `${this.baseUrl}/${this.apiVersion}/${config.url}`;
    }
  }

  async get(config: IConfig) {
    return this.fetchingService.get(this.getFullApiUrl(config));
  }

  async post(config: IConfig) {
    return this.fetchingService.post(this.getFullApiUrl(config), config.data);
  }

  async put(config: IConfig) {
    return this.fetchingService.put(this.getFullApiUrl(config), config.data);
  }

  async delete(config: IConfig) {
    return await this.fetchingService.delete(this.getFullApiUrl(config));
  }
}

export default HttpService;
