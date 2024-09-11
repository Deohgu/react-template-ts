import React, { useMemo } from "react";
import { useExpenses } from "../api/get-expenses";
import {
  Table,
  TableBody,
  TableContainer,
  Paper,
  Typography,
  Container,
} from "@mui/material";
import { LoadingRow } from "./loading-row";
import { ErrorRow } from "./error-row";
import { Expense } from "../types/customer";
import { ExpenseRow } from "./row";
import { TableHeader } from "./table-header";

export const ExpenseTable: React.FC = () => {
  const { data, isLoading, error } = useExpenses();

  const parsedData = useMemo(
    () =>
      data?.map((expense) => ({
        ...expense,
        amount: expense.amount,
      })) ?? [],
    [data],
  );

  const renderTableContent = () => {
    if (isLoading) return <LoadingRow />;

    if (error) return <ErrorRow message={error.message} />;

    return parsedData.map((expense: Expense) => (
      <ExpenseRow key={expense.id} expense={expense} />
    ));
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Expense Table
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="expense table">
          <TableHeader />
          <TableBody>{renderTableContent()}</TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};
