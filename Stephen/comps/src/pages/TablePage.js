import Table from "../components/Table.js";
export default function TablePage() {
  const data = [
    { name: "Apple", color: "red", score: 15 },
    { name: "Orange", color: "orange", score: 20 },
    { name: "Banana", color: "yellow", score: 55 },
    { name: "Cherry", color: "pink", score: 65 },
  ];
  return (
    <div>
      <Table className="" data={data}></Table>
    </div>
  );
}
