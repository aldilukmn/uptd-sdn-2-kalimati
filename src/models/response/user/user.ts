import { UserEntity } from "../../entity/user";

interface DefaultUserResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  result?: UserEntity | string 
}

export type { DefaultUserResponse };