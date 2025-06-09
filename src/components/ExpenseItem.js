function ExpenseItem({ expense, onDelete }) {
  return (
    <div
      className="expense-item"
      style={
        {
          /* your styles here */
        }
      }
    >
      <span>
        <strong>{expense.name}</strong>:{" "}
        <span className="price">${expense.amount.toFixed(2)}</span>
      </span>
      <button onClick={() => onDelete(expense.id)}>Delete</button>
    </div>
  );
}

export default ExpenseItem;
