import { useState } from "react";
import { AppContext } from "./AppContext";

export const AppContextProvider = ({ children }) => {
  const [projectSelected, setProjectSelected] = useState(null);

  const contextValue = {
    projectSelected,
    setProjectSelected,
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};
