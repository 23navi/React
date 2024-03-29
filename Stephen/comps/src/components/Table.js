import { Fragment } from "react";

export default function Table({ children, data, config, keyFn }) {
  const renderedRows = data.map((row) => {
    const renderedRow = config.map((column) => {
      return (
        <td key={column.label} className="p-3">
          {column.render(row)}
        </td>
      );
    });
    return (
      <tr className="border-b" key={keyFn(row)}>
        {/* <td className="p-3">{row.name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${row.color}`}></div>
        </td>
        <td className="p-3">{row.score}</td> */}
        {renderedRow}
      </tr>
    );
  });
  const renderColumns = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return <th key={column.label}>{column.label}</th>;
  });
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            {renderColumns}
            {/* <th>Name</th>
            <th>Color</th>
            <th>Score</th> */}
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}
