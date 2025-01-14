import { GtkResponse } from "./gtk";

interface DefaultResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  result: GtkResponse[]
}

export type { DefaultResponse }