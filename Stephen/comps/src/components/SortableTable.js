import Table from "./Table";
export default function SortableTable({
  children,
  data,
  config,
  keyFn,
  className,
}) {
  return (
    <Table className={className} data={data} config={config} keyFn={keyFn}>
      {children}
    </Table>
  );
}
