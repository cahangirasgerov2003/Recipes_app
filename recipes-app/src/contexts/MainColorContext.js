import { createContext, useState } from "react";

export const MainColorContext = createContext();

export const MainColorContextProvider = ({ children }) => {
  const [color, setColor] = useState(null);
  const changeMainColor = (value) => {
    setColor(value);
  };
  return (
    <MainColorContext.Provider
      value={{
        mainColor: color ? color : "#2e1b18",
        changeMainColor,
      }}
    >
      {children}
    </MainColorContext.Provider>
  );
};
