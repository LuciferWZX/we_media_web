export interface User {
  id: string;
  nickname: string;
  username: string;
  email: string;
  avatar: string;
  token: string;
  phone: string;
  authority: Authority;
}
export interface Authority {
  id: string;
  name: string;
  description: string;
  level: number;
}
