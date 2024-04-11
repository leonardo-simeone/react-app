import React from "react";
import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)} // event.target.value IS USED TO GRAB THE SELECTED VALUE ON THE CATEGORIES OPTIONS
    >
      <option value="">All categories</option>
      {/* INSTEAD OF HARDCODING THESE WE'RE GONNA RENDER THEM DINAMICALLY */}
      {/* <option value="Groceries">Groceries</option>
      <option value="Utilities">Utilities</option>
      <option value="Entertainment">Entertainment</option> */}
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default ExpenseFilter;
