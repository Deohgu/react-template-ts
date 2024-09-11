import React from "react";
import { TableCell, TableRow, Typography } from "@mui/material";
import { TABLE_HEADERS } from "../utils/constants";

interface ErrorRowProps {
  message: string;
}

export const ErrorRow: React.FC<ErrorRowProps> = ({ message }) => (
  <TableRow>
    <TableCell colSpan={TABLE_HEADERS.length} align="center">
      <Typography color="error">Error loading expenses: {message}</Typography>
    </TableCell>
  </TableRow>
);
