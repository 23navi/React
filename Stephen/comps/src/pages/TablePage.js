import Table from "../components/Table.js";
export default function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-400", score: 15 },
    { name: "Orange", color: "bg-orange-400", score: 20 },
    { name: "Banana", color: "bg-yellow-400", score: 55 },
    { name: "Cherry", color: "bg-pink-400", score: 65 },
  ];

  const config = [
    {
      label: "Name",
      render: (rowData) => {
        return rowData.name;
      },
    },
    {
      label: "Color",
      render: (rowData) => {
        return <div className={`p-3 m-2 ${rowData.color}`}></div>;
      },
    },
    {
      label: "Score",
      render: (rowData) => {
        return rowData.score;
      },
      header: () => {
        return <th className="bg-red-500">Score</th>;
      },
    },
  ];

  const keyFn = (data) => {
    return data.name;
  };
  return (
    <div>
      <Table className="" data={data} config={config} keyFn={keyFn}></Table>
    </div>
  );
}
