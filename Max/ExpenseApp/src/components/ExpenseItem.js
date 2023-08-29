import "./ExpenseItem.css";

function ExpenseItem({ title, amount, date }) {
  const expenseDate = date;
  const expenseTitle = title;
  const expenseAmount = amount;

  const year = date.toLocaleString("en-US", { month: "long" });
  const month = date.toLocaleString("en-US", { day: "2-digit" });
  const day = date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>

      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
