import { createContext } from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  const valuesToShare = {};
  return (
    <NavigationContext.Provider value={valuesToShare}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
