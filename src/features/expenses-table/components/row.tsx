import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { formatAmount } from "../utils/formatter";
import { Expense } from "../types/customer";

interface ExpenseRowProps {
  expense: Expense;
}

export const ExpenseRow: React.FC<ExpenseRowProps> = ({ expense }) => (
  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
    <TableCell component="th" scope="row">
      {expense.id}
    </TableCell>
    <TableCell>{expense.merchant}</TableCell>
    <TableCell align="right">{formatAmount(expense.amount)}</TableCell>
    <TableCell>{expense.category}</TableCell>
    <TableCell>{expense.description}</TableCell>
    <TableCell>{expense.status}</TableCell>
  </TableRow>
);
