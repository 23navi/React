import Table from "../components/Table.js";
export default function TablePage() {
  const data = [
    { name: "Apple", color: "bg-red-400", score: 15 },
    { name: "Orange", color: "bg-orange-400", score: 20 },
    { name: "Banana", color: "bg-yellow-400", score: 55 },
    { name: "Cherry", color: "bg-pink-400", score: 65 },
  ];
  return (
    <div>
      <Table className="" data={data}></Table>
    </div>
  );
}
