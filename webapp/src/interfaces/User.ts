export interface IUser {
  id?: string | null;
  picture?: string | null;
  email?: string | null;
  firstname?: string | null;
  lastname?: string | null;
  position?: string | null;
  nickname?: string;
  name?: string;
  updatedAt?: string; // Thời gian có thể sử dụng Date nếu bạn muốn chuyển đổi
  emailVerified?: boolean;
  roles: string[];
}

export interface ISession {
  accessToken: string;
  idToken: string;
}
