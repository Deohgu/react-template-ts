import React from "react";
import { TableCell, TableRow, CircularProgress } from "@mui/material";
import { TABLE_HEADERS } from "../utils/constants";

export const LoadingRow: React.FC = () => (
  <TableRow>
    <TableCell colSpan={TABLE_HEADERS.length} align="center">
      <CircularProgress />
    </TableCell>
  </TableRow>
);
