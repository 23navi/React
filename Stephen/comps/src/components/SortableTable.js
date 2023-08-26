import Table from "./Table";
import { useState } from "react";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa6";
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
    if (sortBy !== label) {
      setSortBy(label);
      setSortOrder("asc");
      return;
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
          <th
            className={"cursor-pointer hover:bg-gray-100"}
            onClick={() => headerClick(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortOrder)}
              {column.label}
            </div>
          </th>
        );
      };
      return column;
    }
    return column;
  });

  const getIcons = (label, sortBy, sortOrder) => {
    if (label !== sortBy || sortOrder === null) {
      return <FaSort />;
    } else if (sortOrder === "asc") {
      return <FaSortUp />;
    } else {
      return <FaSortDown />;
    }
  };

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
