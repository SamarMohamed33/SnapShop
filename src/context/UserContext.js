import { createContext, useState } from "react";

export let userContext = createContext(0);

export default function UserProvider({ children }) {
  let [user, setUser] = useState("");

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
