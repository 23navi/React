import { useState } from "react";

export default function useSort({ data, config }) {
  const [sortOrder, setSortOrder] = useState(null); // null, asc,desc
  const [sortBy, setSortBy] = useState(null); // name,score....

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

  return {
    sortBy,
    sortOrder,
    headerClick,
    sortedData,
  };
}
