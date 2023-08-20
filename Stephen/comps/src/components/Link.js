import classNames from "classnames";
import useNavigationContext from "../hooks/use-navigation";

export default function Link({ to, children }) {
  const { navigate } = useNavigationContext();
  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };
  const classnames = classNames("text-blue-500");
  return (
    <a className={classnames} href={to} onClick={handleClick}>
      {children}
    </a>
  );
}
