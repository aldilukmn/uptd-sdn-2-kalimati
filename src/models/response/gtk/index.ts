import { GtkEntity } from "../../entity/gtk";

interface DefaultGtkResponse {
  status: {
    code: number,
    response: string,
    message: string,
  };
  result: GtkEntity[]
}

export type { DefaultGtkResponse }