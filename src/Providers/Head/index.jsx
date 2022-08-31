import { createContext, useState } from "react";

export const HeaderContext = createContext([]);

export const HeaderProvider = ({ children }) => {
  const [tab, setTab] = useState("aboutMe");
  
  
  

  const chooseTab = (pag) => {
    setTab(pag);
    
  };

  return (
    <HeaderContext.Provider value={{ tab, chooseTab }}>
      {children}
    </HeaderContext.Provider>
  );
};