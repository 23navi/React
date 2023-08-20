import { useContext } from "react";
import NavigationContext from "../context/NavigationContext";

export default function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
    console.log(window.location.pathname);
  };
  return <a onClick={handleClick}>{children}</a>;
}
