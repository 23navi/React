export default function ExpandablePanel({ children, header }) {
  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>
      </div>
      <div className="p-2 border-t"> {children}</div>
    </div>
  );
}