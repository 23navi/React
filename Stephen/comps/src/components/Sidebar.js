import Link from "./Link";
export default function Sidebar() {
  const lists = [
    { label: "Dropdown", path: "/" },
    { label: "Button", path: "/button" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];
  const renderedList = lists.map((list) => {
    return (
      <Link
        key={list.label}
        to={list.path}
        activeClassName={"font-bold border-l-4 border-blue-500 pl-2"}
        className={"mb-3"}
      >
        {list.label}
      </Link>
    );
  });

  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedList}
    </div>
  );
}
