import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ expenses }) {
  const renderExpenses = expenses.map((expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  });
  return <div>{renderExpenses}</div>;
}
