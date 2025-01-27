import { DefaultUserResponse } from "../../models";
import UserType from "./type";

export default class LoginUser {
  static async doLogin(payload: UserType): Promise<DefaultUserResponse> {
    const response = await fetch(
      'https://api-uptdsdn2kalimati.vercel.app/api/v1/login', {
        method: 'POST',
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
}