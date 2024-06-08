import { useContext, createContext, useState, useEffect } from "react";
import { AuthResponse } from "../types/types";
// import type { AuthResponse, User } from "../types/types";
// import requestNewAccessToken from "./requestNewAccessToken";
// import { API_URL } from "./authConstants";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({
  isAuthenticated: false,
  getAccessToken: () => {},
  saveUser: (_userData: AuthResponse) => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [refreshToken, setRefreshToken] = useState<string>("");

  // cambiar accerntToken por el nombre de la variable que se usará para guardar el token de acceso
  function getAccessToken() {
    return accessToken;
  }

  function saveUser(userData: AuthResponse) {
    setAccessToken(userData.body.accessToken);
    setRefreshToken(userData.body.refreshToken);

    localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
    setIsAutenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, getAccessToken, saveUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
