import { createContext } from "react";
// import useFirebaDDddse from "../Firebase/useFirebase";
import useHook from "../newHook/useHook";

export const AuthContext = createContext();

export default function Context({ children }) {
  const authValue = useHook();
  //   console.log();
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}
