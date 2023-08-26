import Table from "./Table";

import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa6";
import useSort from "../hooks/use-sort";
export default function SortableTable({
  children,
  data,
  config,
  keyFn,
  className,
}) {
  const { sortBy, sortOrder, sortedData, headerClick } = useSort({
    data,
    config,
  });

  // update config
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
