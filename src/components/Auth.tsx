import React, { useContext, useState, useEffect } from "react";
import firebase from "../firebase";
import { AuthState } from "../types";

export const AuthContext = React.createContext<AuthState | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authState, setAuthState] = useState<AuthState | null>(null);

  useEffect(
    () =>
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user === null) {
          setAuthState(null);
        } else {
          const token = await user.getIdTokenResult();
          setAuthState({ user, token });
        }
      }),
    []
  );

  return (
    <AuthContext.Provider value={authState}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const authState = useContext(AuthContext);
  return authState;
}
