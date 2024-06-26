import { useContext, createContext, useState, useEffect } from "react";
import { AuthResponse, accessTokenResponse, user } from "../types/types";
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
  getRefreshToken: () => {},
  signOut: () => {},
  // getUser: () => ({} as user | undefined),
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAutenticated] = useState(false);
  const [accessToken, setAccessToken] = useState<string>("");
  const [user, setUser] = useState<user>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  async function requestNewAccessToken(refreshToken: string) {
    try {
      const response = await fetch("http://127.0.0.1:5000/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${refreshToken}`,
        },
      });

      if (response.ok) {
        const json = (await response.json()) as accessTokenResponse;
        if (json.error) {
          throw new Error(json.error);
        }
        return json.body.accessToken;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function getUserInfo(accessToken: string) {
    try {
      const response = await fetch("http://127.0.0.1:5000/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.ok) {
        const json = await response.json();

        if (json.error) {
          throw new Error(json.error);
        }
        return json;
      } else {
        throw new Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function checkAuth() {
    if (accessToken) {
      const userInfo = await getUserInfo(accessToken);
      if (userInfo) {
        saveSessionInfo(userInfo, accessToken, getRefreshToken()!);
        setIsLoading(false);
        return;
      }
    } else {
      const token = getRefreshToken();
      if (token) {
        const newAccessToken = await requestNewAccessToken(token);
        if (newAccessToken) {
          const userInfo = await getUserInfo(newAccessToken);
          if (userInfo) {
            saveSessionInfo(userInfo, newAccessToken, token);
            setIsLoading(false);
            return;
          }
        }
      }
    }
    setIsLoading(false);
  }

  function signOut() {
    setIsAutenticated(false);
    setAccessToken("");
    setUser(undefined);
    localStorage.removeItem("token");
  }

  function saveSessionInfo(
    userInfo: user,
    accessToken: string,
    refreshToken: string
  ) {
    setAccessToken(accessToken);
    localStorage.setItem("token", JSON.stringify(refreshToken));
    setIsAutenticated(true);
    setUser(userInfo);
  }

  // cambiar accessTokenn por el nombre de la variable que se usará para guardar el token de acceso
  function getAccessToken() {
    return accessToken;
  }

  function getRefreshToken(): string | null {
    const tokenData = localStorage.getItem("token");
    if (tokenData) {
      const token = JSON.parse(tokenData);
      return token;
    }
    return null;
  }

  function saveUser(userData: AuthResponse) {
    setAccessToken(userData.body.accessToken);
    // setRefreshToken(userData.body.refreshToken);
    localStorage.setItem("token", JSON.stringify(userData.body.refreshToken));
    setIsAutenticated(true);
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        getAccessToken,
        saveUser,
        getRefreshToken,
        signOut,
      }}
    >
      {isLoading ? <div>LOading...</div> : children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
