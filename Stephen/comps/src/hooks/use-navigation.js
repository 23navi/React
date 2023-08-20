import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

function useNavigationContext() {
  return useContext(NavigationContext);
}

export default useNavigationContext;
