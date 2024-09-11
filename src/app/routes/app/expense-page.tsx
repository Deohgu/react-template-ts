import { ExpenseTable } from "../../../features/expenses-table/components/expense-table";

/**
 * ExpensePage component that renders the ExpenseTable.
 * This component serves as a container for the ExpenseTable,
 * allowing for potential addition of page-specific logic or layout in the future.
 */
export const ExpensePage = () => {
  return (
    <div className="expense-page">
      <ExpenseTable />
    </div>
  );
};
