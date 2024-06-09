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

export interface accessTokenResponse {
  statusCode: number;
  body: {
    accessToken: string;
  };
  error?: string;
}
