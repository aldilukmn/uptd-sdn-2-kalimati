import { JwtPayload } from "jwt-decode";

interface UserEntity {
  username: string;
  password: string;
  email: string
  role: string;
  image_url: string;
  image_id: string;
}

interface RoleType extends JwtPayload {
  role: string
}

export type { UserEntity, RoleType }