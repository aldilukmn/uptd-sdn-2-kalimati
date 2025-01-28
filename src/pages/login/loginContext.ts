import Methods from "../../config/methods";
import { DefaultUserResponse } from "../../models";
import UserType from "./type";

export default class handleUser {
  static baseUrl: string = 'https://api-uptdsdn2kalimati.vercel.app/api/v1';
  static async doLogin(payload: UserType): Promise<DefaultUserResponse> {
    const response = await fetch(
      `${this.baseUrl}/login`, {
        method: Methods.POST,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username: payload.username,
          password: payload.password
        }),
        credentials: 'include'
      }
    );
    const data = await response.json();
    return data;
  }

  static async doLogout (userToken: string) {
    const response = await fetch(
      `${this.baseUrl}/logout`, {
        method: Methods.DELETE,
        headers: {
          'Authorization': `Bearer ${userToken}`
        },
        credentials: 'include'
      }
    )
    const data: DefaultUserResponse = await response.json();
    return data;
  }
}