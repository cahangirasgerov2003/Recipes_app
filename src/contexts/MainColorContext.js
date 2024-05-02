import { createContext, useReducer } from "react";
import mainColorReducer from "../reducers/mainColorReducer";

export const MainColorContext = createContext();

export const MainColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainColorReducer, {
    color: null,
    mode: "dark",
  });

  const changeMainColor = (value) => {
    dispatch({
      type: "SETCOLOR",
      value,
    });
  };

  const changeModeColor = (value) => {
    dispatch({
      type: "SETMODECOLOR",
      value,
    });
  };

  return (
    <MainColorContext.Provider
      value={{
        mainColor: state.color ? state.color : "#1d867f",
        changeMainColor,
        changeModeColor,
        mode: state.mode,
      }}
    >
      {children}
    </MainColorContext.Provider>
  );
};
