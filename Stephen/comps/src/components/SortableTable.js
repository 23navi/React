import Table from "./Table";
export default function SortableTable({
  children,
  data,
  config,
  keyFn,
  className,
}) {
  const headerClick = (label) => {
    console.log(`${label} was clicked on the header`);
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
    <Table className={className} data={data} config={newConfig} keyFn={keyFn}>
      {children}
    </Table>
  );
}
