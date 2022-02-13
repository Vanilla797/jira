import { ReactNode } from "react";
import { AuthProvider } from "./auth-context";

export const AppProvisers = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};
