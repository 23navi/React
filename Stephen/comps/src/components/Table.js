export default function Table({ children, data }) {
  const renderedRows = data.map((row) => {
    return (
      <tr className="border-b" key={row.name}>
        <td className="p-3">{row.name}</td>
        <td className="p-3">{row.color}</td>
        <td className="p-3">{row.score}</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table-auto border-spacing-2">
        <thead>
          <tr className="border-b-2">
            <th>Name</th>
            <th>Color</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>{renderedRows}</tbody>
      </table>
    </div>
  );
}
