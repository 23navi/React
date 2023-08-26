import Table from "./Table";
import { useState } from "react";
export default function SortableTable({
  children,
  data,
  config,
  keyFn,
  className,
}) {
  const [sortOrder, setSortOrder] = useState(null); // null, asc,desc
  const [sortBy, setSortBy] = useState(null); // name,score....

  let sortedData = data;

  if (sortBy && sortOrder) {
    const { sortValue } = config.find((column) => column.label === sortBy);

    sortedData = [...data];

    sortedData.sort((a, b) => {
      const valA = sortValue(a);
      const valB = sortValue(b);
      const reverseOrder = sortOrder === "desc" ? -1 : 1;
      if (typeof valA === "string") {
        return valA.localeCompare(valB) * reverseOrder;
      } else {
        return (valA - valB) * reverseOrder;
      }
    });
  }

  const headerClick = (label) => {
    console.log(`${label} was clicked on the header`);
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
    }
    if (sortOrder === null) {
      setSortBy(label);
      setSortOrder("asc");
    } else if (sortOrder === "asc") {
      setSortBy(label);
      setSortOrder("desc");
    } else if (sortOrder === "desc") {
      setSortBy(null);
      setSortOrder(null);
    }
  };

  const newConfig = config.map((column) => {
    if (column.sortValue) {
      column.header = () => {
        return (
          <th onClick={() => headerClick(column.label)} className="bg-red-500">
            {column.label}
          </th>
        );
      };
      return column;
    }
    return column;
  });
  return (
    <Table
      className={className}
      data={sortedData}
      config={newConfig}
      keyFn={keyFn}
    >
      {children}
    </Table>
  );
}
