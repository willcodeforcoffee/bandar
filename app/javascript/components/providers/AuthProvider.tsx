import React, { ReactNode, createContext, useContext } from "react";
import { parseJwt } from "../utils/parseJwt";

interface InfoToken {
  iat: number;
  iss: string;
  nonce: string;
  name: string;
  picture: string;
}

interface UserInfoData {
  nonce: string;
  name: string;
  picture: string;
}

interface AuthInfoData {
  isAuthenticated: boolean;
  user: null | UserInfoData;
}

interface AuthProviderProps {
  children: ReactNode;
}

function parseInfoTokenCookie(): InfoToken | null {
  const infoToken = document.cookie;
  if (!infoToken) {
    return null;
  }

  const jwtInfo: InfoToken = parseJwt(infoToken);
  return jwtInfo;
}

function convertInfoTokenIntoAuthData(infoToken: InfoToken | null): AuthInfoData {
  if (!infoToken || !infoToken.nonce) {
    return {
      isAuthenticated: false,
      user: null,
    };
  }

  return {
    isAuthenticated: true,
    user: {
      nonce: infoToken.nonce,
      name: infoToken.name,
      picture: infoToken.picture,
    },
  };
}

const AuthContext = createContext(convertInfoTokenIntoAuthData(parseInfoTokenCookie()));
AuthContext.displayName = "AuthContext";

function AuthProvider(props: AuthProviderProps): JSX.Element {
  return <>{props.children}</>;
}

function useAuth(): AuthInfoData {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };
