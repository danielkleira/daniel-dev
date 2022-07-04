import { createContext, useState } from "react";
import Projetos from "../../Data/projects";

export const CardContext = createContext([]);

export const CardProvider = ({ children }) => {
  const [projetos] = useState(Projetos);

  return (
    <CardContext.Provider value={{ projetos }}>{children}</CardContext.Provider>
  );
};
