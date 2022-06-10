import INewTutorial from '../interfaces/newTutorial.interface';
import HttpService from './http.service';

class ProductsService extends HttpService {
  tutorialsUrl: string;
  constructor() {
    super();
    this.tutorialsUrl = 'tutorials';
  }

  async getTutorials() {
    const { data } = await this.get({
      url: `${this.tutorialsUrl}`,
    });
    return data;
  }

  async getPublishedTutorials(published: boolean) {
    const { data } = await this.get({
      url: `${this.tutorialsUrl}`,
      id: undefined,
      published,
    });
    return data.data;
  }

  async getTutorialById(id: string) {
    const { data } = await this.get({
      url: `${this.tutorialsUrl}`,
      id,
    });
    return data.data;
  }

  async addTutorial(newTutorial: INewTutorial) {
    const { data } = await this.post({
      url: this.tutorialsUrl,
      data: newTutorial,
    });
    return data.data;
  }

  async updateTutorial(tutorial: INewTutorial) {
    const { data } = await this.put({
      url: this.tutorialsUrl,
      data: tutorial,
      id: tutorial.id,
    });
    return data.data;
  }

  async deleteTutorial(id: string) {
    const res = await this.delete({
      url: `${this.tutorialsUrl}`,
      id,
    });
    return res;
  }

  async deleteAllTutorials() {
    const { data } = await this.delete({
      url: `${this.tutorialsUrl}`,
      id: undefined,
    });
    return data.data;
  }
}

export default ProductsService;
