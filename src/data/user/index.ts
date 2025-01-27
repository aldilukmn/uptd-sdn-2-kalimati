import { DefaultUserResponse } from "../../models";

export default class DataUser {
  static baseUrl: string = 'https://api-uptdsdn2kalimati.vercel.app/api/v1/user';

  static async getUser (userToken: string) {
    const response = await fetch(
      `${this.baseUrl}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${userToken}`
        }
      });
    const data: DefaultUserResponse = await response.json();
    return data;
  }
}