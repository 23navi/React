export default function ExpenseDate({ date }) {
  const year = date.toLocaleString("en-US", { month: "long" });
  const month = date.toLocaleString("en-US", { day: "2-digit" });
  const day = date.getFullYear();

  return (
    <div>
      <div>{year}</div>
      <div>{month}</div>
      <div>{day}</div>
    </div>
  );
}
