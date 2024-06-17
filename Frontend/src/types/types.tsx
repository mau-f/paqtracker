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

export interface Visita {
  _id: string;
  nombre: string;
  fecha: string;
  tipo: string;
  fechaIgreso: string;
  rut: string;
  validoHasta: string;
  estacionamiento: string;
  // Agrega otros campos que sean necesarios
}
