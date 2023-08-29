import ExpenseItem from "./ExpenseItem";
import "./card.css";
import "./ExpenseList.css";

export default function ExpenseList({ expenses }) {
  const renderExpenses = expenses.map((expense) => {
    return (
      <div className="card">
        <ExpenseItem
          className="expenses"
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      </div>
    );
  });
  return <div>{renderExpenses}</div>;
}
