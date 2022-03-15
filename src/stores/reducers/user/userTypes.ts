export interface UserState {
  fetching: boolean;
  error: string;
  user: UserInfo;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
}

export interface APILogIn  {
  email: string
  password: string
}