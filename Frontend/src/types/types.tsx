export interface AuthResponse {
  body: {
    user: UserActivation;
    accessToken: string;
    refreshToken: string;
  };
}

export interface user {
  _id: string;
  name: string;
  email: string;
}
