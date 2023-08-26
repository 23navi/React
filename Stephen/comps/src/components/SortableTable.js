import Table from "./Table";
export default function SortableTable({
  children,
  data,
  config,
  keyFn,
  className,
}) {
  const headerClick = () => {
    console.log("headerClick");
  };

  config.map((column) => {
    if (column.sortValue) {
      column.header = () => {
        return (
          <th onClick={headerClick} className="bg-red-500">
            Score
          </th>
        );
      };
    }
  });
  return (
    <Table className={className} data={data} config={config} keyFn={keyFn}>
      {children}
    </Table>
  );
}
