import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { AlertState, AlertContextType } from "./types";

export const AlertContext = createContext<AlertContextType>({
  seen: false,
  setSeen: () => {},
  alert: null,
  setAlert: () => {},
});

export const useAlert = () => useContext<AlertContextType>(AlertContext);

export const AlertProvider = ({ children }: { children: React.ReactNode }) => {
  const [alert, setAlert] = useState<AlertState | null>(null);
  const [seen, setSeen] = useState<boolean>(false);
  useEffect(() => setSeen(false), [alert]);

  return (
    <AlertContext.Provider value={{ alert, setAlert, seen, setSeen }}>
      {children}
    </AlertContext.Provider>
  );
};
