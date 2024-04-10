import React from "react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button
                className="btn btn-outline-danger"
                onClick={() => onDelete(expense.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          {/* HERE WE USE THE REDUCE METHOD TO CALCULATE THE TOTAL AMOUNT
            WITH THE HELP OF acc ACCUMULATOR TO HOLD THE INITIAL NUMBER OF THE TOTAL SUM (0)  */}
          {/* SO WE CALL OUR EXPENSES AND THE REDUCE MOTHOD GIVING IT acc AND expense AS ARGUMENTS
            THEN IN THE ARROW FUNCTION WE CALL expense.amount TO GRAB THE AMOUNT OF EACH OBJECT AND
            ADD IT TO THE acc WHICH IS STARTING AT 0 'expense.amount + acc, 0' THEN WE CALL THE
            TO FIXED FUNCTION WHICH IS TO SET THE NUMBER OF DECIMALS AFTER THE DECIMAL POINT 'toFixed(2)'
            THE $ SIGN IS TO SEE THE TOTAL MAOUNT IN DOLLARS */}
          <td>
            $
            {expenses
              .reduce((acc, expense) => expense.amount + acc, 0)
              .toFixed(2)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
