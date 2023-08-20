import Link from "./Link";
export default function Sidebar() {
  const lists = [
    { label: "Dropdown", path: "/" },
    { label: "Button", path: "/button" },
    { label: "Accordion", path: "/accordion" },
  ];
  const renderedList = lists.map((list) => {
    return (
      <Link key={list.label} to={list.path}>
        {list.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col ">
      {renderedList}
    </div>
  );
}
