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
  name: string;
  fecha: string;
  frequent: string;
  entry_time: string;
  rut: string;
  validoHasta: string;
  parking: string;
  // Agrega otros campos que sean necesarios
}

export interface Package {
  _id: string;
  name: string;
  fecha: string;
  depto: string;
  destinatario: string;
  // Agrega otros campos que sean necesarios
}

export interface resident {
  _id: string;
  name: string;
  depto: string;
  phone: string;
  email: string;
  // Agrega otros campos que sean necesarios
}
