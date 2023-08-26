import SortableTable from "../components/SortableTable";
export default function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-400", score: 15 },
    { name: "Orange", color: "bg-orange-400", score: 70 },
    { name: "Banana", color: "bg-yellow-400", score: 55 },
    { name: "Cherry", color: "bg-pink-400", score: 25 },
  ];

  const config = [
    {
      label: "Name",
      render: (rowData) => {
        return rowData.name;
      },
      sortValue: (rowData) => {
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
      sortValue: (rowData) => {
        return rowData.score;
      },
    },
  ];

  const keyFn = (data) => {
    return data.name;
  };
  return (
    <div>
      <SortableTable
        className=""
        data={data}
        config={config}
        keyFn={keyFn}
      ></SortableTable>
    </div>
  );
}
